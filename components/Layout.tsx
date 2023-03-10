import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Sidebar";

// import Footer from "../Footer";
type Props = {
  narrow: boolean
  title: string
  children?: ReactNode;
};
const Layout = ({ narrow = true, title = "boshd", children }: Props) => {
  const pageTitle = title !== "boshd" ? `welcome to mi casa` : title;

  var width = !narrow ? "" : "max-w-7xl";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="../public/favicon.ico?" type="image/x-icon" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="flex flex-row">
        <div className="h-full max-w-7xl px-4 xl:px-0">
          <Header />
        </div>
        <div className="flex justify-center w-full pt-16">
          <div
            // className={`w-full ${width} px-0 md:px-4 xl:px-0`}
            className={"max-w-2xl mx-auto pb-8 w-full"}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout