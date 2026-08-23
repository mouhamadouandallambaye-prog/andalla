import "./globals.css";
import Navbar from "../components/Navbar";
import CustomCursor from "../components/CustomCursor";

export const metadata = {
  title: "Andalla",
  description: "Portfolio de Mouhamadou Andalla Mbaye - Business Intelligence & Data Analyst",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col justify-between">
        <CustomCursor />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <footer className="py-8 text-center text-xs text-gray-500 border-t border-white/5">
          © {new Date().getFullYear()} Mouhamadou Andalla Mbaye — Tous droits réservés.
        </footer>
      </body>
    </html>
  );
}