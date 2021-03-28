import Layout from '../components/Layout'
import { posts } from "../profile";

const PostCard = ({post}) => (
    <div className='col-md-4'>
      <div className='card'>
       <div className='overflow'>
         <img src={post.imagenURL} className='card-img-top' alt=""/>
       </div>
       <div className='card-body'>
          <h1>{post.titulo}</h1>
          <p>{post.contenido}</p>
       </div>
      </div>
    </div>
)
const Blog = () => (
    <Layout footer={false} title='Mi blog' dark>
        <div className='row'>
        {
            posts.map((post, index)=>(
               <PostCard post={post} key={index}/>
            ))
        }
        </div>
       
    </Layout>
)

export default Blog