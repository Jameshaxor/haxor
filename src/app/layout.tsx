import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manu Kumar Nayak — I make the internet look expensive",
  description: "Web developer crafting premium, scroll-stopping digital experiences. Portfolio by Manu Kumar Nayak.",
  keywords: ["Manu Kumar Nayak", "web developer", "portfolio", "Next.js", "frontend", "UI/UX", "premium web design"],
  openGraph: {
    title: "Manu Kumar Nayak — I make the internet look expensive",
    description: "Web developer crafting premium, scroll-stopping digital experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
