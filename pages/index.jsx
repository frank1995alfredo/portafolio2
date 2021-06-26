import Layout from "../components/Layout";
import { skills, experiences, proyectos } from "../profile";
import Link from "next/link";

const Index = () => (
  <Layout>
    {/**Header */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body fondo text-light">
          <div className="row">
            <div className="col-md-3">
              <img
                src="foto.jpg"
                alt=""
                className="img-fluid"
                style={{ height: "200px", width: "220px" }}
              />
            </div>
            <div className="col-md-8">
              <h1>Franklin Cañadas</h1>
              <h3>Desarrollador web API REST</h3>
              <p className="texto-justificado">
                Hola, mi nombre es Franklin Cañadas, tengo 26 años, soy
                estudiante egresado de Ing. Sistemas Computacionales me gusta
                trabajar en equipo, compartir ideas, escribir código, resolver
                problemas, compartir conocimientos, aprender de los demás,
                ayudar a los demás con lo que este a mi alcance.{" "}
              </p>
              <a
                className="btn btn-light"
                tabindex="-1"
                href="cv.pdf"
                target="_blank"
              >
                Ver CV
              </a>{"   "}
             <button className="btn btn-success">
                <a  href="https://api.whatsapp.com/send?phone=593999637950"  target="_blank">  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                  <path className="btn btn-success" d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
              </a>
             </button>{"   "}
             <button className="btn btn-secondary">
                <a  href="https://t.me/FranklinPcCoder"  target="_blank">  
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16">
                 <path className="btn btn-success" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                </svg>
              </a>
             </button>{"   "}
             <button className="btn btn-primary">
                <a  href="https://www.facebook.com/profile.php?id=100013908435606"  target="_blank">  
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
               <path className="btn btn-success" d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
             </svg>
              </a>
             </button>{"   "}
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
                    className="progress-bar  progress-bar-animation"
                    role="progressbar"
                    style={{ width: `${skill.porcentage}%` }}
                  ></div>
                </div>
                <h6>{skill.text}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Sobre mi</h1>
            <ul>
              {experiences.map((experience, index) => (
                <li key={index}>
                  <h3>{experience.titulo}</h3>
                  <p>{experience.descripcion}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/**portafolio */}

    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-primary">
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
                    <p className="texto-justificado">{proyecto.descripcion}</p>
                    <Link href={proyecto.ruta}>
                      <a className="btn btn-outline-primary">Saber mas</a>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
