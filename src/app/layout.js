import {Playfair_Display} from "next/font/google"
import "./globals.css";

export const metadata = {
  title: "Anushthan Saxena",
  description: "This is my portfolio website",
};

const playfair = Playfair_Display({subsets: ["latin"]});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playfair.className}, bg-color3 relative`}>
        {children}
        </body>
    </html>
  );
}
