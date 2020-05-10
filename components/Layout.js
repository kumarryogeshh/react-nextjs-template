import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = (props) => {
  return (
    <div id="wrap" className="d-flex flex-column">
      <Head>
        <title>React NextJS Boilerplate</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/flatly/bootstrap.min.css"
        />
      </Head>
      <Header active={props.active} />
      <div className="container">
        {props.children}

        <style jsx>
          {`
            html,
            body {
              height: 100%;
              /* The html and body elements cannot have any padding or margin. */
            }
            #wrap {
              min-height: 100%;
              height: auto !important;
              height: 100%;
              /* Negative indent footer by it's height */
              margin: 0 auto -60px;
            }
            #push,
            #footer {
              height: 60px;
            }
            #footer {
              background-color: #000;
            }

            @media (max-width: 767px) {
              #footer {
                margin-left: -20px;
                margin-right: -20px;
                padding-left: 20px;
                padding-right: 20px;
              }
            }
            .container-footer {
              min-height: 100vh;
              width: auto;
              max-width: 680px;
            }
            .container {
              margin-top: 30px;
            }
            .footer {
              position: fixed;
              bottom: 0;
              width: 100%;
              height: 60px;
              line-height: 60px;
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
