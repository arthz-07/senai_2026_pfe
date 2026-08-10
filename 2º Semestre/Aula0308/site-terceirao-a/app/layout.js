import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300","400","500","600","700"],
});

export const metadata = {
  title: "3º Ano A | SESI Mirandópolis",
  description: "Conheça a turma do 3º Ano A da Escola SESI Mirandópolis.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}