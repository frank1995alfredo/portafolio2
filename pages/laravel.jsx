import Layout from "../components/Layout";

const Laravel = () => (
    
  <Layout>
      <div className='row'>
       <div className='col-md-12 text-center'>
         <h1>Proyecto en Laravel</h1>
       </div>
     
      </div>

      <div className='row'>
       <div className='col-md-12'>
       <div className="card">
          <div className="card-body card h-100">
           <img src="laravel.png" className='card-img-top'  alt=""/>
          </div>
        </div>
       </div>
      
       <p  className='texto-justificado'>Este mini proyecto se desarrollo usando los mismos modelos del proyecto hecho en Go,
          en un inicio se uso postman para hacer pruebas de los end points, despúes se paso a descargar 
          una plantilla en React Js para poder ser consumido, el miniproyecto usa autenticación via token,
          la versión del framework es Laravel 7 con php 7, la conexión a la base de datos se la realizó
          con PostgreSql.
          Para ver el código del proyecto acceda al siguiente enlace {' '}         
            <a href="https://github.com/frank1995alfredo/pr-laravel.git" target='_blank'>Github</a>
          </p>
       
      </div>
  </Layout> 
);

export default Laravel;