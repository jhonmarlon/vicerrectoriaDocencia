import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <>
      <div className='navbarMain'>
          <nav className="navbar navbarHeader navbar-expand-lg navbar-light">
              <div className="container-fluid d-flex justify-content-between">
                  <a className="navbar-brand" href="/"><img src='img/logoITM.png' className='img-fluid mx-auto'></img></a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                    
                  <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
                      <div className='d-md-flex d-block mt-3 mt-md-0 order-3'>
                          {/* <div className='d-flex justify-content-center'>
                              <form className='mx-auto d-flex'>
                                  <div className="input-group">
                                      <input type="text" className="form-control btnBuscarInput" placeholder="Busca y entérate" aria-label="Search" aria-describedby="basic-addon1"/>
                                  </div>
                              </form>
                          </div> */}
                          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex">
                              {/* <li className="nav-item">
                                  <a className="nav-link active text-white" aria-current="page" href="#">Novedades</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link text-white" href="#">Proyectos</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link disabled text-white" href="#" tabIndex="-1" aria-disabled="true">Formación</a>
                              </li> */}
                              <li className="nav-item dropdown dropstart">
                                  {/* <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      Seminarios
                                  </a> */}
                                  <ul className="dropdown-menu bg-azul-navbar dropDownNavbar" aria-labelledby="navbarDropdownMenuLink">
                                      <li>
                                     
                                      </li>
                                      <li>
                                      {/* <Link to="/PEI" className="btn azul-itm tituloDropDownNavBar">
                                          PEI - El gran acuerdo 2022
                                      </Link> */}
                                      </li>
                                      {/* <li><a className="dropdown-item" href="#">Another action</a></li>
                                      <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                                  </ul>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </nav>
      </div>
    </>
  )
}
