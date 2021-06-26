import Layout from "../components/Layout";
import { certificados } from "../profile";

const PostCard = ({ certificado }) => (
  <div className="col-md-4 p-2">
    <div className="card h-100">
      <div className="overflow">
        <img src={certificado.imagenURL} className="card-img-top" alt="" />
      </div>
      <div className="card-body">
        <h3>{certificado.titulo}</h3>
        <p className="texto-justificado">{certificado.descripcion}</p>
        <a
          className="btn btn-outline-primary"
          href={certificado.certificado}
          target="_blank"
        >Ver certificado</a>
      </div>
    </div>
  </div>
);

const Certificados = () => (
  <Layout footer={false} title="Certificados">
    <div className="row">
      {certificados.map((certificado, index) => (
        <PostCard certificado={certificado} key={index} />
      ))}
    </div>
  </Layout>
);

export default Certificados;
