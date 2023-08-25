const Catedras = () => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <img src="img/Catedras/banner-Catedras.png" className="img-fluid d-flex mx-auto vw-100" alt="" />
        </div>
        <div className="col-12">
          <nav className="navbar navbar-expand-lg navbar-light bg-azul-navbar d-lg-block d-md-none d-none">
              <div className="container-fluid">
                  <div className="navbar-collapse" id="navbarNav">
                      <div className="container-fluid d-block d-md-flex justify-content-between">
                          <ul className="navbar-nav d-flex align-items-center">
                              <li className="nav-item">
                                  <a className="nav-link text-white" href="#formacionCiudadana">Formación ciudadana</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link text-white" href="#requisitos">Requisitos</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link text-white" href="#catedras">Cátedras</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link text-white" href="#cronograma">Cronograma</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link text-white" href="#preguntasFrecuentes">Preguntas frecuentes</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </nav>
        </div>
      </div>

      <div id="formacionCiudadana">
        <div className="container">
          <div className="row mt-4">
              <div className="col-md-6 col-12">
                  <h2 className="mb-4 azul-itm"><b>Aprendamos sobre Formación ciudadana</b></h2>
                  <p>Son experiencias transversales a la formación académica y fueron creadas con el propósito de no solo formar hombres y mujeres en <b className="azul-itm">ciencia y tecnología</b>, también buscamos complementar tu proceso académico para que tengas una gran <b className="azul-itm">formación ciudadana</b>.</p>
              </div>
              <div className="col-md-6 col-12">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe width="100%" height="490" src="https://www.youtube.com/embed/S-9iXzJoWns?si=ryyW2qp_6Xv3MKwh" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                  </div>
              </div>
          </div>
          <hr className='d-flex mx-auto my-5'></hr>
          <div className='row'>
              <div className='col-12 mb-3'>
                  <h2 className="azul-itm text-center"><b>Requisitos</b></h2>
                  <p className="azul-itm text-center">Aquí te explicamos todo lo que debes saber</p>
              </div>
          </div>
          <div className="row">
              <div className="col-md-6 col-12">
                  <div className="embed-responsive embed-responsive-16by9">
                  <iframe width="100%" height="490" src="https://www.youtube.com/embed/gBiZtrjTgog?si=IgpgnefQqHjDMcxD" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>                    </div>
              </div>
              <div className="col-md-6 col-12">
                  <p>Es muy importante que sepas que <b className="azul-itm">Catedra Abierta</b> es <b className="azul-itm">obligatoria y un requisito</b> para poder obtener tu titulo académico.</p>
                  <p className="azul-itm text-center">¡Recuerda que <b>Catedra Abierta</b> es una oportunidad que tienes para invertir en tu <b>formación integral</b> con un sentido profundo de <b>humanidad y ciudadanía</b>!</p>
              </div>
          </div>
        </div>
      </div>

      <div id="catedras">
        <div className="container mb-5">
          <hr className='d-flex mx-auto my-5'></hr>
          <div className='row'>
              <div className='col-12 mb-3'>
                  <h2 className="mb-4 azul-itm text-center"><b>Cátedras</b></h2>
              </div>
              <div className="col-md-8 col-12 offset-md-2 offset-0 shadow border d-flex justify-content-center align-items-center">
                <img src="img/Catedras/alert-circle.png" className="icono m-2"></img>
                <p className="mt-3">Recuerda es necesario que cumplas con <b className="azul-itm">dos cátedras</b> para obtener tu título académico</p>
              </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <h2 className="mb-4 azul-itm"><b>Cátedra de Ciudadanía y Paz</b></h2>
              <h3 className="azul-itm">Requisito N°1</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 col-12">
              <p>Es un espacio para la reflexión y apropiación de competencias ciudadanas a partir del estado social de derecho, la cultura de paz, el desarrollo humano y la sustentabilidad ambiental.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h5 className="azul-itm mb-3">Para cumplir con está cátedra debes:</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="shadow p-3">
                <h5 className="azul-itm">1. Trabajo independiente</h5>
                <p>Aprobar el programa del <b>Curso Virtual</b>, asistiendo a:</p>
                <div className="d-flex">
                  <img src="img/icon-date.png" className="icono m-1" />
                  <p className="m-1">4 experiencias formativas</p>
                </div>
                <div className="d-flex">
                  <img src="img/icon-clock.png" className="icono m-1" />
                  <p className="m-1">Duración 2 horas cada una</p>
                </div>
                <p className="mt-3 azul-itm">Para un total de 8 horas de experiencia de trabajo autónomo estimado.</p>
                <p className="m-0">El curso lo encontrarás dispuesto en la plataforma Cvirtual del ITM y debes cumplir con la prueba de salida.</p>
              </div>
            </div>
            <div className="col-md-6 col-12 mt-md-0 mt-3">
              <div className="shadow p-3">
                <h5 className="azul-itm">2. Trabajo participativo</h5>
                <p>Asistir a <b>conferencias de Cátedra para la Paz</b> o encuentros <b>Conversemos durante todo el semestre</b>:, y hacer su respectivo registro y validación en la plataforma virtual.</p>
                <div className="d-flex">
                  <img src="img/icon-date.png" className="icono m-1" />
                  <p className="m-1">4 conferencias o encuentros</p>
                </div>
                <div className="d-flex">
                  <img src="img/icon-pencil.png" className="icono m-1" />
                  <p className="m-1">Registro y validación en la plataforma virtual</p>
                </div>
                <p className="mt-3 m-0">Debes estar muy atento a la promoción que realizamos de estas charlas para que te inscribas y participes (modalidad virtual o presencial)</p>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <h2 className="mb-4 azul-itm"><b>Cátedra Deporte y Cultura</b></h2>
              <h3 className="azul-itm">Requisito N°2</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 col-12">
              <p>Es un espacio para el desarrollo integral, la salud mental y física a través de programas extracurriculares deportivos, artísticos y culturales que fortalece el desarrollo integral ciudadano, la responsabilidad social y profesional.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h5 className="azul-itm mb-3">Para aprobarse debe cumplirse con UNO de los siguientes requisitos:</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-12">
              <div className="shadow p-3">
                <h5 className="azul-itm">1. Trabajo independiente</h5>
                <p>Aprobar el programa del <b>Curso Virtual</b>, asistiendo a:</p>
                <div className="d-flex">
                  <img src="img/icon-date.png" className="icono m-1" />
                  <p className="m-1">4 experiencias formativas</p>
                </div>
                <div className="d-flex">
                  <img src="img/icon-clock.png" className="icono m-1" />
                  <p className="m-1">Duración 16 horas de trabajo</p>
                </div>
                <p className="azul-itm mt-3">Temáticas formativas</p>
                <div className="row">
                  <div className="col-md-6 col-12">
                      <div className="d-flex mb-md-3 mb-3 align-items-center">
                        <div><img src="img/Catedras/Icon-sport.png" alt="" /></div>
                        <p className="m-2">Estilos de vida saludable</p>
                      </div>
                    </div>
                  <div className="col-md-6 col-12">
                      <div className="d-flex mb-md-3 mb-3 align-items-center">
                        <div><img src="img/Catedras/Icon-heart.png" alt="" /></div>
                        <p className="m-2">Nutrición y actividad física</p>
                      </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12">
                      <div className="d-flex mb-md-3 mb-3 align-items-center">
                        <div><img src="img/Catedras/Icon-running.png" alt="" /></div>
                        <p className="m-2">Capacidad y cualidades físicas</p>
                      </div>
                  </div>
                  <div className="col-md-6 col-12 align-items-center">
                     <div className="d-flex">
                        <div><img src="img/Catedras/Icon-training.png" alt="" /></div>
                        <p className="m-2">Entrenamiento básico</p>
                     </div>
                  </div>
                </div>
                <p className="mt-3 azul-itm">Experiencia autónoma estimada para 16 horas de trabajo.</p>
                <p className="m-0">El curso lo encontrarás dispuesto en la plataforma <b>Cvirtual</b> del ITM.</p>
              </div>
            </div>
            <div className="col-md-6 col-12 mt-md-0 mt-3">
              <div className="shadow p-3">
                <h5 className="azul-itm">2. Trabajo participativo</h5>
                <p>Curso presencial o virtual, sincrónico, consiste en la asistencia a:</p>
                <div className="d-flex">
                  <img src="img/icon-date.png" className="icono m-1" />
                  <p className="m-1">8 experiencias de aprendizaje</p>
                </div>
                <div className="d-flex">
                  <img src="img/icon-pencil.png" className="icono m-1" />
                  <p className="m-1">Duración 2 horas cada una</p>
                </div>
                <p className="mt-3 azul-itm">Experiencias formativas</p>
                <div className="row">
                  <div className="col-md-6 col-12">
                      <div className="d-flex mb-md-3 mb-3 align-items-center">
                        <div><img src="img/Catedras/Icon-ball.png" alt="" /></div>
                        <p className="m-2">Deporte y Mantenimiento Físico</p>
                      </div>
                    </div>
                  <div className="col-md-6 col-12">
                      <div className="d-flex mb-md-3 mb-3 align-items-center">
                        <div><img src="img/Catedras/Icon-paint.png" alt="" /></div>
                        <p className="m-2">Dibujo y Pintura</p>
                      </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12">
                      <div className="d-flex mb-md-3 mb-3 align-items-center">
                        <div><img src="img/Catedras/Icon-camera.png" alt="" /></div>
                        <p className="m-2">Fotografía</p>
                      </div>
                  </div>
                  <div className="col-md-6 col-12">
                     <div className="d-flex mb-md-3 mb-3 align-items-center">
                        <div><img src="img/Catedras/Icon-bird.png" alt="" /></div>
                        <p className="m-2">Laboratorio de paz: Paz-Lab</p>
                     </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-12">
                      <div className="d-flex mb-md-3 mb-3 align-items-center">
                        <div><img src="img/Catedras/Icon-building.png" alt="" /></div>
                        <p className="m-2">Medellín - La Ciudad Ocultada</p>
                      </div>
                  </div>
                  <div className="col-md-6 col-12">
                     <div className="d-flex align-items-center">
                        <div><img src="img/Catedras/Icon-touch.png" alt="" /></div>
                        <p className="m-2">Revolución 4.0, entre la tecnología y el humanismo</p>
                     </div>
                  </div>
                </div>
                <p className="mt-3 azul-itm">Experiencia formativa estimada para 20 horas de trabajo.</p>
                <p className="mt-3 m-0">Debes consultar en el <b>Cronograma</b> la fecha de inicio y el desarrollo temático de las cátedras.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="cronograma">
        <div className="container">
          <hr className='d-flex mx-auto my-5'></hr>
          <div className='row'>
              <div className='col-12 mb-3'>
                  <h2 className="azul-itm text-center"><b>Cronograma</b></h2>
              </div>
          </div>
          <div className="row">
              <div className="col-md-8 col-12 offset-md-2 offset-0 mb-4">
                <div className="shadow">
                 <div className="row p-3">
                    <div className="col-md-2 col-12 d-flex justify-contnet-center align-items-center">
                      <div>
                        <h2 className="azul-itm text-center"><b>17</b></h2>
                        <h5 className="azul-itm">Febrero</h5>
                      </div>
                    </div>
                    <div className="col-md-10 col-12">
                      <h3 className="azul-itm">Cátedra Medellín – La Ciudad Ocultada</h3>
                      <h5 className="azul-itm mb-3">Modalidad virtual y presencial</h5>
                      <p className="azul-itm">Maestro Gilmer Mesa</p>
                      <p className="azul-itm">Aula Magna</p>
                      <p className="azul-itm">4:00 pm</p>
                      <button className="btnPpal m-0">Incríbete aquí</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-12 offset-md-2 offset-0 mb-md-5 mb-0">
                <div className="shadow">
                 <div className="row p-3">
                    <div className="col-md-2 col-12 d-flex justify-contnet-center align-items-center">
                        <div>
                          <h2 className="azul-itm text-center"><b>17</b></h2>
                          <h5 className="azul-itm">Febrero</h5>
                        </div>
                    </div>
                    <div className="col-md-10 col-12">
                      <h3 className="azul-itm">Cátedra Medellín – La Ciudad Ocultada</h3>
                      <h5 className="azul-itm mb-3">Modalidad virtual y presencial</h5>
                      <p className="azul-itm">Maestro Gilmer Mesa</p>
                      <p className="azul-itm">Aula Magna</p>
                      <p className="azul-itm">4:00 pm</p>
                      <button className="btnPpal m-0">Incríbete aquí</button>
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

export default Catedras
