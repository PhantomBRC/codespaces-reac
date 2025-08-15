import "./styles/theme.css";
import "./styles/global.css";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router";
import { CartProvider } from "./service/CartContext";
import { Cart } from "./components/Cart";
import { ProductList } from "./components/ProductList";
import { Login } from "./components/Login";
import { Signup } from "./components/Cadastro";
import { Estoque } from "./components/Estoque";


export default function App() {
  return (

    <>
    <CartProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/stock" element={<Estoque/>} />
      </Routes>
    </CartProvider>
    </>
  );
  }
  