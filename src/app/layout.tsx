import Header from "@/core/aplication/interfaces/components/header/header";
import StoreProvider from "@/core/aplication/store/store-provider";
import CacheProvider from "@/infra/cache/cache-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../core/aplication/interfaces/styles/globals.scss";
import style from "./layout.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CacheProvider>
          <StoreProvider>
            <Header />
            {/* <Aside childrens={[<div>teste</div>, <Price type="etherium" price={10}/>]} tittle="teste"/> */}

            {children}
            <footer className={style.copyRight}>
              <span>STARSOFT &copy; TODOS OS DIREITOS RESERVADOS</span>
            </footer>
          </StoreProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
