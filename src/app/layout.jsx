import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "UX Evaluator",
  description: "Elevate your UX with AI-powered analysis, competitor insights, and user retention optimization.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-white bg-backgroundDark `}>
        {children}
      </body>
    </html>
  );
}
