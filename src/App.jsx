import { HashRouter , Route, Routes } from "react-router-dom"
// import Home from "./components/Home"
import Pei from "./components/PEI/PEI"
// import Catedras from "./components/catedras/Catedras"

const App = () => {
  return (
    <HashRouter >
      <Routes>
          <Route exact path="/" element={<Pei />} />
          {/* <Route exact path="/Catedras" element={<Catedras />} /> */}
          {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </HashRouter >
  )
}

export default App
