import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const domain = "localhost:3000/";
  return (
    <Html>
      <Head>
        <title>SH-Bootcamp</title>

        <link rel="icon" type="images/x-icon" href="logo.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Courgette&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
