import Layout from "../components/Layout";

const React = () => (
    
  <Layout>
      <div className='row'>
       <div className='col-md-12 text-center'>
         <h1>Front End Sistema Laravel</h1>
       </div>
      </div>
      <div className='row'>
       <div className='col-md-12'>
       <div className="card">
          <div className="card-body card h-100">
           <img src="black-dashboard-react.gif" className='card-img-top'  alt=""/>
          </div>
        </div>
       </div>
       <p>Este es una plantilla que descarge para poder consumir la api que desarrolle con laravel.
           La plantilla esta hecha con React js, para ralizar las peticiones se usaron los hooks de react, 
           axios, useEffect, useState, useRef.
              El código esta en Github mediante este enlace <a href="https://github.com/frank1995alfredo/react-laravel.git" target='_blank'>Github</a>
          </p>
      </div>
  </Layout> 
);

export default React;
