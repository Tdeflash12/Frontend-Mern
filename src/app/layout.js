
import "./globals.css";

export const metadata = {
  title: "Dokan",
  description: "E-commerce website",
  keywords: ["e-commerce", "online shopping", "buy online", "sell online", "marketplace"],
};

export default function RootLayout({ children }) {
  return (
    <html>
      <header>This is header</header>
      <body>{children}</body>
      
    </html>
  );
}
