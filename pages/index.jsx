import Layout from "../components/Layout";
import { skills, experiences, proyectos } from "../profile";
import Link from "next/link";

const Index = () => (
    
  <Layout>
    {/**Header */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img
                src="foto.jpg"
                alt=""
                className="img-fluid"
                style={{ height: "200px", width: "200px" }}
              />
            </div>
            <div className="col-md-7">
              <h1>Franklin Cañadas</h1>
              <h3>Fullstack Developer</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
                iste aspernatur, ratione a non dolores. Ipsam, iste sit? Odio
                quae amet doloribus suscipit modi qui dignissimos numquam quis
                maxime dolore?{" "}
              </p>
              <a href="/hireme">Hireme</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/**segunda seccion */}

    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h2>Habilidades</h2>
            {skills.map((skill, index) => (
              <div className="py-3" key={index}>
                <h5>{skill.skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-animation"
                    role="progressbar"
                    style={{ width: `${skill.porcentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experiencia</h1>
            <ul>
              {experiences.map((expecience, index) => (
                <li key={index}>
                  <h3>{expecience.titulo}</h3>
                  <h5>
                    {expecience.desde} - {expecience.hasta}
                  </h5>
                  <p>{expecience.descripcion}</p>
                </li>
              ))}
            </ul>
            <Link href="/experiencia">
              <a className="btn btn-light">Saber mas</a>
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/**portalfolio */}

    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portafolio</h1>
            </div>

            {proyectos.map((proyecto, index) => (
              <div className="col-md-4 p-2" key={index}>
                <div className="card h-100">
                  <div className="overflow">
                    <img
                      src={`${proyecto.imagen}`}
                      className="card-img-top"
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <h3>{proyecto.nombre}</h3>
                    <p>{proyecto.descripcion}</p>
                    <Link href={proyecto.ruta}>
              <a className="btn btn-outline-dark">Saber mas</a>
            </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link href="/portafolio">
              <a className="btn btn-outline-light">Mas Proyectos</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
