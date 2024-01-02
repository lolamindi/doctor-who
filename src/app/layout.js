import Head from 'next/head';
import { Lato } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./global.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export const montserrat = Montserrat({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Doctor Who",
  description: "Doctor Who website in Spanish",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
       <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

