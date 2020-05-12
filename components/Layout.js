import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = (url) => {
  console.log(url);
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Layout = ({ active, title, children }) => {
  return (
    <div id="wrap" className="d-flex flex-column">
      <Head>
        <title>{`${title} | React NextJS Boilerplate`}</title>
      </Head>
      <Header active={active} />
      <div className="container">
        {children}

        <style jsx>
          {`
            #wrap {
              min-height: 100%;
              height: auto !important;
              height: 100%;
              /* Negative indent footer by it's height */
              margin: 0 auto -60px;
            }
            #push,
            .container {
              margin-top: 30px;
            }
          `}
        </style>
        <div id="push"></div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
