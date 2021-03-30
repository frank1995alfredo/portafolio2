import Layout from "../components/Layout";

const React = () => (
  <Layout>
    <div className="row">
      <div className="col-md-12 text-center">
        <h1>Mapa con Javascript</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body card h-100">
            <img src="mapa.png" className="card-img-top" alt="" />
          </div>
        </div>
      </div>
      <p className="texto-justificado">
        Es proyecto pequeño en el cual se dibuja un mapa y en el aparecen
        pequeños puntos de distintos lugares de una ciudad. El código esta en
        Github mediante este enlace{" "}
        <a
          href="https://github.com/frank1995alfredo/portafolio.git"
          target="_blank"
        >
          Github
        </a>
      </p>
    </div>
  </Layout>
);

export default React;
