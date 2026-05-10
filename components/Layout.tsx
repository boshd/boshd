import Head from "next/head";
import { ReactNode } from "react";
import config from "../data/config";
import Header from "./Header";

// import Footer from "../Footer";
type Props = {
  narrow: boolean;
  title: string;
  children?: ReactNode;
};
const Layout = ({ narrow = true, title = "boshd", children }: Props) => {
  const pageTitle = title && title !== "boshd" ? title : "Kareem Arab - Applied AI Engineer";
  const description = config.siteDescription;

  var width = !narrow ? "" : "max-w-7xl";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={config.siteUrl} />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="../public/favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <div className="flex min-h-screen flex-col bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        {/* <div className="w-full px-10 py-4">
          <Header />
        </div> */}

        <div className="flex justify-center w-full pt-32 px-4">
          <div
            // className={`w-full ${width} px-0 md:px-4 xl:px-0`}
            className={"mx-auto w-full min-w-0 max-w-2xl pb-8"}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
