import usePEI from "../../hooks/usePEI.js"

const Pei = () => {

  const { handleToggleActiveIcon, activeButton } = usePEI()

  return (
    <>
      <div className="row">
        <div className="col-12">
          <img src="img/PEI/banner-PEI.png" className="img-fluid d-flex mx-auto vw-100" alt="" />
        </div>
        <div className="col-12">
          <nav className="navbar navbar-expand-lg navbar-light bg-azul-navbar d-lg-block d-md-none d-none">
              <div className="container-fluid">
                  <div className="navbar-collapse" id="navbarNav">
                      <div className="container-fluid d-block d-md-flex justify-content-between">
                          <ul className="navbar-nav d-flex align-items-center">
                              <li className="nav-item">
                                  <a className="nav-link text-white" target="_blank" href="docs/Independientes/PEI/Documento PEI  V 1.8.pdf">Documento PEI 2023</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link text-white" href="#queEsPEI">¿Sabes que es PEI?</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link text-white" href="#fasesActualizacionPEI">Fases actualización PEI</a>
                              </li>
                              <li className="nav-item">
                                  <a target="_blank" className="nav-link text-white" href="docs/Independientes/PEI/Presentacion PEI  claustro  25 de agosto.pdf"><button className='btnPpal px-4'>Ver presentación</button></a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div id="documentacionPEI">
            <div className='row my-5'>
              <div className='col-md-2 col-12 offset-md-1 text-center p-3'>
                  <div className={`${ activeButton === 1 ? 'bg-azul-itm' : 'bg-Gris-light'} pt-3`}>
                      <img src={activeButton === 1 ? './img/PEI/icon-acta-azul.png' : './img/PEI/icon-acta.png'} className='img-fluid d-flex mx-auto iconosInfoPEI'></img>
                      <div className={`${ activeButton === 1 ? 'bg-azul-itm-claro' : 'bg-gris-oscuro'}  mt-3 p-2 rounded-top-right btnDocumentos`} id="btnDocumentos_11" 
                        onMouseEnter={(event) => handleToggleActiveIcon(event)}
                      >
                        <a className='text-white fw-bold disabled' target="_blank" href='./docs/Independientes/PEI/Acta No. 27 del 07 de octubre de 2020  aprobacion ruta PEI.PDF'>Acta No. 027</a>
                      </div>
                  </div>
              </div>
              <div className='col-md-2 col-12 text-center text-center p-3'>
                  <div className={`${ activeButton === 2 ? 'bg-azul-itm' : 'bg-Gris-light'} pt-3`}>
                      <img src={activeButton === 2 ? './img/PEI/icon-acuerdo-azul.png' : './img/PEI/icon-acuerdo.png'} className='img-fluid d-flex mx-auto iconosInfoPEI'></img>
                      <div className={`${ activeButton === 2 ? 'bg-azul-itm-claro' : 'bg-gris-oscuro'}  mt-3 p-2 rounded-top-right btnDocumentos`} id="btnDocumentos_22" 
                        onMouseEnter={(event) => handleToggleActiveIcon(event)}
                      >
                          <a className='text-white fw-bold disabled' target="_blank" href='./docs/Independientes/PEI/Acuerdo 16 del 19 de  abril de 2013. Por el cual se aprueba el Proyecto Educativo Institucional PEI.pdf'>Acuerdo No. 16</a>
                      </div>
                  </div>
              </div>
              <div className='col-md-2 col-12 text-center text-center p-3'>
                  <div className={`${ activeButton === 3 ? 'bg-azul-itm' : 'bg-Gris-light'} pt-3`}>
                      <img src={activeButton === 3 ? './img/PEI/icon-acuerdo-azul.png' : './img/PEI/icon-acuerdo.png'} className='img-fluid d-flex mx-auto iconosInfoPEI'></img>
                      <div className={`${ activeButton === 3 ? 'bg-azul-itm-claro' : 'bg-gris-oscuro'}  mt-3 p-2 rounded-top-right btnDocumentos`} id="btnDocumentos_33" 
                        onMouseEnter={(event) => handleToggleActiveIcon(event)}
                      >
                          <a className='text-white fw-bold disabled' target="_blank" href='./docs/Independientes/PEI/Acuerdo No. 25 del 27 de septiembre de 2019.pdf'>Acuerdo No. 25</a>
                      </div>
                  </div>
              </div>
              <div className='col-md-2 col-12 text-center text-center p-3'>
                  <div className={`${ activeButton === 4 ? 'bg-azul-itm' : 'bg-Gris-light'} pt-3`}>
                      <img src={activeButton === 4 ? './img/PEI/icon-reacreditacion-azul.png' : './img/PEI/icon-reacreditacion.png'} className='img-fluid d-flex mx-auto iconosInfoPEI'></img>
                      <div className={`${ activeButton === 4 ? 'bg-azul-itm-claro' : 'bg-gris-oscuro'}  mt-3 p-2 rounded-top-right btnDocumentos`} id="btnDocumentos_44" 
                        onMouseEnter={(event) => handleToggleActiveIcon(event)}
                      >
                          <a className='text-white fw-bold disabled' target="_blank" href='./docs/Independientes/PEI/Documentación Recreaditación digital.pdf'>Reacreditación digital</a>
                      </div>
                  </div>
              </div>
              <div className='col-md-2 col-12 text-center text-center p-3'>
                  <div className={`${ activeButton === 5 ? 'bg-azul-itm' : 'bg-Gris-light'} pt-3`}>
                      <img src={activeButton === 5 ? './img/PEI/icon-puntodefuga-azul.png' : './img/PEI/icon-puntodefuga.png'} className='img-fluid d-flex mx-auto iconosInfoPEI'></img>
                      <div className={`${ activeButton === 5 ? 'bg-azul-itm-claro' : 'bg-gris-oscuro'}  mt-3 p-2 rounded-top-right btnDocumentos`} id="btnDocumentos_55" 
                        onMouseEnter={(event) => handleToggleActiveIcon(event)}
                      >
                          <a className='text-white fw-bold disabled' target="_blank" href='./docs/Independientes/PEI/PEI_Punto_Fuga_Revisión_enviado_decanos.pdf'>PEI punto de fuga</a>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className='col-12 d-flex justify-content-center'>
              <div className='bg-azul-itm pt-3'>
                  <img src='./img/PEI/icon-puntodefuga-azul.png' className='img-fluid d-flex mx-auto iconosInfoPEI'></img>
                  <div className='bg-azul-itm-claro mt-3 p-2 rounded-top-right btnDocumentos' id="btnDocumentos_6" 
                    onMouseEnter={(event) => handleToggleActiveIcon(event)}
                  >
                      <a className='text-white fw-bold' target="_blank" href='./docs/Independientes/PEI/Documento PEI  V 1.8.pdf'>Documento PEI 2023</a>
                  </div>
              </div>
          </div>
      </div>
      <div id="queEsPEI">
        <div className="container">
            <hr className='d-flex justify-content-start my-5'></hr>
            <div className="row">
                <div className="col-md-6 col-12">
                    <h2 className="mb-4 azul-itm"><b>¿Sabes que es el PEI</b><br></br>o Proyecto Educativo Institucional?</h2>
                    <p>Para el <b>ITM</b> el <b>Proyecto Educativo Institucional - PEI</b> representa su identidad que se construye con la participación de la comunidad educativa y se plasma en los fundamentos de la Institución que otorgan sentido a sus procesos de enseñanza y aprendizaje, a su gobernanza y a su cultura organizacional que se vinculan para consolidar el horizonte en el que los planes de desarrollo institucionales posibilitan el logro del propósito superior en el que se articulan las funciones misionales y la gestión institucional.</p>
                    <p className='azul-itm text-center fw-bold'>¡Es la oportunidad para que juntos aportemos y nos asumamos corresponsables de la vida institucional!</p>
                </div>
                <div className="col-md-6 col-12">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe width="100%" height="490" src="https://www.youtube.com/embed/kacobsYbLY4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <hr className='d-flex mx-auto my-5'></hr>
            <div className='row'>
                <div className='col-12 mb-3'>
                    <h2 className="azul-itm text-center"><b>Etapas y fases de actualización del PEI</b></h2>
                </div>
                <div className="col-12">
                  <img src="img/PEI/etapasPEI.png" className="img-fluid d-flex mx-auto"/>
                </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-8 col-12 offset-md-2 offse-0 d-md-flex d-block justify-content-center align-items-center">
                <img src="img/PEI/imgVicerrector.png" className="img-fluid d-flex mx-auto"/>
                <p className="Azul-complementario-ITM text-center fw-bold p-3">&quot;Nuestra participación es la mejor expresión de rodear a la Institución con aportes sólidos y con la idea de que sean perdurables en el tiempo; desde este punto de vista asumimos el PEI como un gran acuerdo, una construcción colectiva, un sentido amplio del mundo&quot; (Jorge Iván Ríos Rivera, Vicerrector de Docencia)</p>
              </div>
            </div>
        </div>
      </div>

      <div id="fasesActualizacionPEI" className="mb-5">
        <div className="container">
          <hr className='d-flex mx-auto my-5'></hr>
          <div className="row">
              <div className='col-12 mb-3'>
                  <h2 className="azul-itm text-center"><b>Fases actualización PEI</b></h2>
              </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div id="carouselFasesPEI" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselFasesPEI" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselFasesPEI" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselFasesPEI" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="img/PEI/fase1.png" className="img-fluid d-flex mx-auto"/>
                  </div>
                  <div className="carousel-item">
                    <img src="img/PEI/fase2.png" className="img-fluid d-flex mx-auto"/>
                  </div>
                  <div className="carousel-item">
                    <img src="img/PEI/fase3.png" className="img-fluid d-flex mx-auto"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Pei
