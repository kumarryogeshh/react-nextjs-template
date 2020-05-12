import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link
            rel="stylesheet"
            href="https://bootswatch.com/4/flatly/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/nprogress@0.2.0/nprogress.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;1,100;1,300&display=swap"
            rel="stylesheet"
          />
          <meta name="description" content="Boilerplate code for NextJs" />
          <meta charSet="utf-8" />
          <meta name="robots" content="noindex, nofollow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>
          {`
            body {
              font-family: "Roboto", sans-serif;
            }
          `}
        </style>
      </html>
    );
  }
}
