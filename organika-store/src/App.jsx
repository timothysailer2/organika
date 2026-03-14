import { useState } from "react";
import Navbar from "./components/NavBar";
import Catalog from "./components/Catalog";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App(){

  const [cartCount,setCartCount] = useState(0);

  function addToCart(){

    setCartCount(cartCount + 1);

  }

  return(

    <div>

      <Navbar cartCount={cartCount}/>

      <Catalog onAdd={addToCart}/>

      <Footer/>

    </div>

  );

}

export default App;
