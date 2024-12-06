import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./assets/pages/home"
import About from "./assets/pages/about"
import Products from "./assets/pages/products"

/*
Creiamo il frontend del nostro Blog e le sue pagine!
Partiamo installando React Router DOM: npm install react-router-dom
Definiamo almeno 3 pagine: una homepage, una pagina “chi siamo” e una pagina con la lista dei post - Implementiamo una navbar in comune a tutte le pagine per poter navigare tra loro
Bonus
Centralizzare la Navbar grazie a un Layout
Gestire la classe active
*/

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/about" Component={About}></Route>
          <Route path="/products" Component={Products}></Route>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
