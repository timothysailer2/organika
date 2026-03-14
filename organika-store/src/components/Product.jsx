import { useState } from "react";
import QuantityPicker from "./QuantityPicker";
import "../styles/product.css";

function Product(props){

    const product = props.data;

    const [quantity,setQuantity] = useState(1);

    const total = product.price * quantity;

    function handleQuantityChange(qty){

        setQuantity(qty);

    }

    return(

        <div className="col-md-3 mb-4">

            <div className="product card h-100 shadow">

                <img
                    src={product.image}
                    className="product-img card-img-top"
                    alt={product.title}
                />

                <div className="card-body text-center">

                    <h5>{product.title}</h5>

                    <p className="price">
                        ${product.price.toFixed(2)}
                    </p>

                    <QuantityPicker onChange={handleQuantityChange}/>

                    <p className="mt-2">

                        Total: <strong>${total.toFixed(2)}</strong>

                    </p>

                </div>

            </div>

        </div>
        

    );
    

}

export default Product;
