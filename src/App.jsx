import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/home"
import About from "./pages/about"
import Products from "./pages/products"
import DefaultLayout from "./layouts/DefaultLayout"
import BlankLayout from "./layouts/BlankLayout"
import NotFound from "./layouts/NotFound"
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
          <Route element = {<DefaultLayout/>}> 
            <Route path="/" Component={Home}></Route>
            <Route path="/about" Component={About}></Route>
            <Route path="/products" Component={Products}></Route>
          </Route> 
          <Route element={<BlankLayout/>}>
            <Route path='*' Component={NotFound}></Route>
          </Route> 
        </Routes>
      </BrowserRouter>
      
    </>
  ) 
}  

export default App
