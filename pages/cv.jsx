import Layout from "../components/Layout";

const React = () => (
    
  <Layout>
      <div className='row'>
       <div className='col-md-12 text-center'>
         <h1>CV 1</h1>
       </div>
      </div>
      <div className='row'>
       <div className='col-md-12'>
       <div className="card">
          <div className="card-body card h-100">
           <img src="porta1.png" className='card-img-top'  alt=""/>
          </div>
        </div>
       </div>
       <p>Este es la primera versión de mi CV, las tecnologías usadas para este proyecto fueron ReacJS, Html5,
           css3, Boostrtap5
              El código esta en Github mediante este enlace <a href="https://github.com/frank1995alfredo/portafolio.git" target='_blank'>Github</a>
          </p>
      </div>
  </Layout> 
);

export default React;
