import Layout from "../components/Layout";

const Go = () => (
  <Layout>
    <div className="row">
      <div className="col-md-12 text-center">
        <h1>Proyecto en Go</h1>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-body card h-100">
            <img src="go.png" className="card-img-top" alt="" />
          </div>
        </div>
      </div>
      <p className="texto-justificado">
        Este proyecto esta hecho con la version 1.14 de go, con el framework
        Gin, los datos se pueden guardar en cualquier base de datos, pero, para
        este proyecto use PostgreSQL, el framework Gin al no usar un
        arquitectura como lo hace Laravel o Django, deja que el programador use
        la arquitectura que el quiera, en otras palabras, es el programador o
        desarrollador que decide de que manera va a estructurar el proyecto, lo
        que me gusta de Go es su sintaxis muy parecida a Python con un toque de
        C. El código esta en Github mediante este enlace{" "}
        <a href="https://github.com/frank1995alfredo/Demo.git" target="_blank">
          Github
        </a>
      </p>
    </div>
  </Layout>
);

export default Go;
