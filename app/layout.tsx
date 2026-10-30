import type { Metadata } from "next";
import "./globals.css";
import { ContactModalProvider } from "@/components/ContactModalContext";

export const metadata: Metadata = {
  title: "Aysha Akter | Full Stack Developer",
  description: "Portfolio of Aysha Akter, Full Stack Developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <ContactModalProvider>{children}</ContactModalProvider>
      </body>
    </html>
  );
}
