//podemos modificar las partes de html cada pagina de nuestra
//aplicacion

import Document, { Html, Head, Main, NextScript } from "next/document";
import Navbar from "../components/Navbar";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>Mi portafolio</title>
          <meta
            name="description"
            content="Franklin Cañadas Portfolio Website"
          ></meta>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
            crossorigin="anonymous"
          ></link>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.css"
          />
          <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTose4bP_weAcnozWZCMSnep2GQazQdt2J14A&usqp=CAU"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
