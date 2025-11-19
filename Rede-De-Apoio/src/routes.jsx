import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home/Home"
import Artigos from "./pages/artigos/Artigos"
import Sobre from "./pages/sobre/Sobre"
import Galeria from "./pages/galeria/Galeria"
import FacaParte from "./pages/facaParte/FacaParte"

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/artigos" element={<Artigos />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/facaparte" element={<FacaParte />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
