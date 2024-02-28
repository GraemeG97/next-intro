import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Football vs Soccer",
  description:
    "A website and blog post about the ongoing debate. Should the sport be call football or Soccer?...it depends on the country you are born in.",
  type: "website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
