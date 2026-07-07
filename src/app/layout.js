import CustomCursor from "@/Components/CustomCursor";
import "./globals.css";

export const metadata = {
  title: "Rubel",
  description: "Rubel Hossen is a professional MERN Stack Web Developer specializing in building production-ready, full-stack web applications with React, Next.js, Node.js, Express, and MongoDB.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth"> 
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Hanken+Grotesk:wght@600;700;800&family=JetBrains+Mono:wght@400;500;700&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background antialiased min-h-screen">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
