import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <>
        <main>
            <div className='container'>
                <div className='row my-5'>
                <div className='col-md-4 col-12'>
                    <h1 className='fw-bold azul-itm'>Hablemos sobre el PEI del ITM</h1>
                    <p>¿Sabes que es el PEI o Proyecto Educativo Institucional?</p>
                    <p><b>¿Y Sabías que el ITM trabaja desde 2021-2</b> en la actualización de nuestro PEI ITM?</p>
                    <p>Si no sabes la respuesta a ninguna de estas preguntas da clic en el siguiente botón:</p>
                    <NavLink to="/PEI" className="btnPpal mb-3 px-4">
                        Entérate
                    </NavLink>
                </div>
                <div className='col-md-8 col-12 mt-md-0 mt-5'>
                    <iframe width="100%" height="500" src="https://www.youtube.com/embed/A0HKt9vmbo8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>          </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Home
