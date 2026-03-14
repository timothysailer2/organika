import { useState } from "react";
import Catalog from "./components/Catalog";
import Navbar from "./components/NavBar";
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

        </div>

    );
}

export default App;
