import Layout from "../components/Layout";

const React = () => (
    
  <Layout>
      <div className='row'>
       <div className='col-md-12 text-center'>
         <h1>CV 2</h1>
       </div>
      </div>
      <div className='row'>
       <div className='col-md-12'>
       <div className="card">
          <div className="card-body card h-100">
           <img src="porta2.png" className='card-img-top'  alt=""/>
          </div>
        </div>
       </div>
       <p  className='texto-justificado'>Este es una actualización de mi CV usando NextJs, Html5, Css3, Bootstrap4.
           NextJs es un framework de ReactJs para desarrollar páginas web estáticas que van a requerir ser rápidas.
            El código esta en Github mediante este enlace <a href="https://github.com/frank1995alfredo/portafolio2.git" target='_blank'>Github</a>
          </p>
      </div>
  </Layout> 
);

export default React;