import Layout from '../components/Layout'

const _error = ({statusCode}) => {
    return (
      <Layout>
          {
            statusCode ? ( 
                <p className='text-center'>No se ha podido cargar la página: Status Code {statusCode}</p>
            ) : (
                <p className='text-center'>No se pudo obtener esta pagina</p>
            )

          }
       
         
      </Layout>
    )
}

export default _error