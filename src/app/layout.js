import { Lato } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";

export const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const montserrat = Montserrat({
  weight: ["400", "700"],
  style: ["italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Doctor Who",
  description: "Doctor Who website in Spanish",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
