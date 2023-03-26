import AuthPage from "./Router/auth-page/auth-page.router";
import ProductsPage from "./Router/products-page/products-page.component";
import './App.css'
import { Route, Routes } from "react-router-dom";
import StoreInterface from "./Router/storeInterface-page/storeInterface-page.component";
function App() {
  return(
    <Routes>
      <Route>
      <Route index={true} element={<AuthPage/>}/>      
      <Route path="/products"element={<ProductsPage/>} ></Route>
      <Route path="/storeInterface"element={<StoreInterface/>} ></Route>
      </Route>
    </Routes>
  )
}

export default App;
