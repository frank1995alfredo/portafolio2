import Layout from "../components/Layout";
import { posts } from "../profile";

const PostCard = ({ post }) => (
  <div className="col-md-4 p-2">
    <div className="card h-100">
      <div className="overflow">
        <img src={post.imagenURL} className="card-img-top" alt="" />
      </div>
      <div className="card-body">
        <h3>{post.titulo}</h3>
        <p className="texto-justificado">{post.contenido}</p>
      </div>
    </div>
  </div>
);

const Intereses = () => (
  <Layout footer={true} title="Intereses" >
    <div className="row">
      {posts.map((post, index) => (
        <PostCard post={post} key={index} />
      ))}
    </div>
  </Layout>
);

export default Intereses;
