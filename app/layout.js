import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Crown Roadside Assistance",
  description:
    "Crown Roadside Assistance is a trusted roadside service company offering reliable assistance for vehicle breakdowns and emergencies. Our team of professionals provides prompt and efficient services to ensure your safety and convenience on the road.",
  url: "https://example.com",
  logo: "https://example.com/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-647-648-3691",
    contactType: "customer support"
  }
};

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  style: "normal",
  subsets: ["latin"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
