import Layout from "../components/Layout";
import Error from '../pages/_error'

const GitHub = (props) => {

   
    if(props.statusCode) {
        return <Error statusCode = {props.statusCode}/>
    }

  return (
    <Layout footer={false} dark>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{props.user.name}</h1>
            <img src={props.user.avatar_url} alt="" />
            <p>{props.user.bio}</p>
            <a
              href={props.user.html_url}
              target="_blank"
              className="btn btn-outline-secondary my-2"
            >
              Ir a github
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/frank1995alfredo");
  const data = await res.json();

  const statusCode = res.status > 200 ? res.status : false 
 
  return {
    props: {
      user: data,
      statusCode,
    },
  };
}

export default GitHub;
