"use client";

import React, { useState, useEffect, useRef, FormEvent, ChangeEvent } from "react";
import { X, Send, Loader2, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverErrorMessage, setServerErrorMessage] = useState<string>("");

  // Animation states for smooth entrance and exit
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const firstInputRef = useRef<HTMLInputElement>(null);
  const modalCardRef = useRef<HTMLDivElement>(null);

  // Mount/unmount animation lifecycle
  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      const raf = requestAnimationFrame(() => {
        setIsAnimating(true);
      });
      return () => cancelAnimationFrame(raf);
    } else {
      setIsAnimating(false);
      const timer = setTimeout(() => {
        setIsMounted(false);
        // Reset non-critical states on close after animation
        if (status === "success") {
          setStatus("idle");
        }
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [isOpen, status]);

  // Lock background body scroll when open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && status !== "submitting") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, status, onClose]);

  // Auto-focus first input when modal opens
  useEffect(() => {
    if (isOpen && status === "idle") {
      const timer = setTimeout(() => {
        firstInputRef.current?.focus();
      }, 120);
      return () => clearTimeout(timer);
    }
  }, [isOpen, status]);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear individual field error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (status === "error") {
      setStatus("idle");
      setServerErrorMessage("");
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedSubject = formData.subject.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName) {
      newErrors.name = "Full name is required";
    }

    if (!trimmedEmail) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      newErrors.email = "Please enter a valid email address (e.g., name@example.com)";
    }

    if (!trimmedSubject) {
      newErrors.subject = "Subject is required";
    }

    if (!trimmedMessage) {
      newErrors.message = "Message is required";
    } else if (trimmedMessage.length < 5) {
      newErrors.message = "Message is too short (minimum 5 characters)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    if (!validateForm()) {
      return;
    }

    setStatus("submitting");
    setServerErrorMessage("");

    try {
      const response = await fetch("https://formspree.io/f/maeedbew", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData(INITIAL_FORM);
        setErrors({});
      } else {
        const data = await response.json().catch(() => null);
        const errorText =
          data?.errors?.map((err: { field?: string; message: string }) => err.message).join(", ") ||
          data?.error ||
          "There was a problem submitting your message. Please try again or email directly.";
        setServerErrorMessage(errorText);
        setStatus("error");
      }
    } catch {
      setServerErrorMessage(
        "Network connection error. Please check your internet connection or email directly at aishaakter014@gmail.com."
      );
      setStatus("error");
    }
  };

  const resetFormToIdle = () => {
    setStatus("idle");
    setFormData(INITIAL_FORM);
    setErrors({});
    setServerErrorMessage("");
  };

  if (!isMounted) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-desc"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop overlay */}
      <div
        onClick={() => {
          if (status !== "submitting") onClose();
        }}
        className={`fixed inset-0 bg-[#172033]/60 backdrop-blur-sm transition-opacity duration-300 ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Modal Card */}
      <div
        ref={modalCardRef}
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-lg rounded-3xl border border-slate-100 bg-white p-6 sm:p-8 text-[#172033] shadow-[0_20px_60px_-15px_rgba(23,32,51,0.2)] transition-all duration-300 max-h-[92vh] overflow-y-auto ${
          isAnimating
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-4 scale-95 opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          disabled={status === "submitting"}
          aria-label="Close modal"
          className="absolute right-4 top-4 sm:right-6 sm:top-6 rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#ff6265]/40 disabled:opacity-40"
        >
          <X size={20} />
        </button>

        {status === "success" ? (
          /* Success Screen */
          <div className="py-6 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-500 shadow-sm">
              <CheckCircle2 size={36} />
            </div>
            <h3
              id="contact-modal-title"
              className="mt-5 text-2xl font-black tracking-tight text-[#172033] sm:text-3xl"
            >
              Message Sent!
            </h3>
            <p
              id="contact-modal-desc"
              className="mt-3 text-sm font-medium leading-relaxed text-slate-600 sm:text-base"
            >
              Thank you! Your message has been sent successfully.
            </p>
            <p className="mt-2 text-xs text-slate-400">
              I appreciate you reaching out and will get back to you as soon as possible.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={resetFormToIdle}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-[#172033] transition hover:bg-slate-50"
              >
                Send another message
              </button>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ff6265] px-6 py-3 text-sm font-bold text-white shadow-md shadow-[#ff6265]/25 transition hover:bg-[#e85356]"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Contact Form */
          <div>
            <div className="pr-8">
              <div className="inline-flex items-center gap-1.5 rounded-full border border-violet-100 bg-[#F5F6FF] px-3 py-1 text-xs font-bold text-[#635BFF]">
                <Sparkles size={13} /> Let&apos;s Connect
              </div>
              <h2
                id="contact-modal-title"
                className="mt-3 text-2xl font-black tracking-tight text-[#172033] sm:text-3xl"
              >
                Let&apos;s Talk
              </h2>
              <p
                id="contact-modal-desc"
                className="mt-1.5 text-sm text-[#667085]"
              >
                Have an inquiry or project in mind? Send me a message and I&apos;ll respond shortly.
              </p>
            </div>

            {/* Error Banner */}
            {status === "error" && (
              <div
                role="alert"
                className="mt-5 flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50/90 p-4 text-xs sm:text-sm text-rose-800"
              >
                <AlertCircle size={18} className="mt-0.5 shrink-0 text-rose-500" />
                <div className="flex-1 leading-5">
                  <p className="font-bold">Submission error</p>
                  <p className="mt-0.5 text-rose-700">{serverErrorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-bold uppercase tracking-wider text-[#172033]"
                >
                  Full Name <span className="text-[#ff6265]">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                  placeholder="e.g. Aisha Akter"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#172033] placeholder-slate-400 transition focus:outline-none focus:ring-2 ${
                    errors.name
                      ? "border-rose-300 focus:border-rose-500 focus:ring-rose-200"
                      : "border-slate-200 focus:border-[#635BFF] focus:ring-[#635BFF]/20"
                  } disabled:bg-slate-50 disabled:opacity-70`}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-xs font-semibold text-rose-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-bold uppercase tracking-wider text-[#172033]"
                >
                  Email Address <span className="text-[#ff6265]">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                  placeholder="you@example.com"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#172033] placeholder-slate-400 transition focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-rose-300 focus:border-rose-500 focus:ring-rose-200"
                      : "border-slate-200 focus:border-[#635BFF] focus:ring-[#635BFF]/20"
                  } disabled:bg-slate-50 disabled:opacity-70`}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-xs font-semibold text-rose-500">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-bold uppercase tracking-wider text-[#172033]"
                >
                  Subject <span className="text-[#ff6265]">*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                  placeholder="e.g. Project inquiry or opportunity"
                  aria-required="true"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "subject-error" : undefined}
                  className={`mt-1.5 w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#172033] placeholder-slate-400 transition focus:outline-none focus:ring-2 ${
                    errors.subject
                      ? "border-rose-300 focus:border-rose-500 focus:ring-rose-200"
                      : "border-slate-200 focus:border-[#635BFF] focus:ring-[#635BFF]/20"
                  } disabled:bg-slate-50 disabled:opacity-70`}
                />
                {errors.subject && (
                  <p id="subject-error" className="mt-1 text-xs font-semibold text-rose-500">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-bold uppercase tracking-wider text-[#172033]"
                >
                  Message <span className="text-[#ff6265]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                  placeholder="Share details about what you would like to discuss..."
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`mt-1.5 w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm text-[#172033] placeholder-slate-400 transition focus:outline-none focus:ring-2 ${
                    errors.message
                      ? "border-rose-300 focus:border-rose-500 focus:ring-rose-200"
                      : "border-slate-200 focus:border-[#635BFF] focus:ring-[#635BFF]/20"
                  } disabled:bg-slate-50 disabled:opacity-70`}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-xs font-semibold text-rose-500">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#ff6265] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-[#ff6265]/25 transition hover:bg-[#e85356] hover:shadow-lg hover:shadow-[#ff6265]/35 focus:outline-none focus:ring-2 focus:ring-[#ff6265]/50 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>

              <p className="text-center text-[11px] text-slate-400">
                Submissions are securely routed via Formspree.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
