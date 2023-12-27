import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({ subsets: ["latin"] });

export const metadata = {
  title: "Doctor Who",
  description: "Spanish language Doctor Who page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
