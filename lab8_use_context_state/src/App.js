import "./App.css";
import NavBar from "./components/navbar/navbar";
import Home from "./components/homepage/home";
import Footer from "./components/footer/footer";
import Catalog from "./components/catalog/catalog";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FiltersContextProvider from "./components/context-provider/filters-context-provider";
import ItemInfo from "./components/item-info/item-info";
import OrdersContextProvider from "./components/context-provider/orders-context-provider";

function App() {
  return (
    <>
      <OrdersContextProvider>
        <FiltersContextProvider>
          <NavBar />
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<Home />}></Route>
                <Route path="catalog" element={<Catalog />}></Route>
                <Route path="item/:id" element={<ItemInfo />}></Route>
                <Route path="*" element={<Home />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
          <Footer />
        </FiltersContextProvider>
      </OrdersContextProvider>
    </>
  );
}

export default App;
