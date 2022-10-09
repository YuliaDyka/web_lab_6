import './App.css';
import NavBar from './components/navbar/navbar'
import Home from './components/homepage/home'
import Footer from './components/footer/footer'
import Catalog from './components/catalog/catalog';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <>
    <NavBar/>
    <BrowserRouter>
    <Routes>
    <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="catalog" element={<Catalog />}></Route>
            <Route path="*" element={<Home />}></Route>
          </Route>
    </Routes>
    </BrowserRouter>
    <Footer/>
  </>
}

export default App;
