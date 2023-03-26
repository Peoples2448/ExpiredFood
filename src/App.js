import AuthPage from "./Router/auth-page/auth-page.router";
import './App.css';
import ProductsPage from "./Router/products-page/products-page.router"
import { Route, Routes } from "react-router-dom";
import StoresPage from './Router/stores-page/stores.router';

function App() {
  return(
    <Routes>
      <Route>
      <Route index={true} element={<AuthPage/>}/>      
      <Route path="/products"element={<ProductsPage/>} />
      <Route path="/storeInterface"element={<StoresPage/>}/>
      </Route>
    </Routes>
  )
}

export default App;
