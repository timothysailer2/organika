import { useState } from "react";

function QuantityPicker(props){

    const [quantity,setQuantity] = useState(1);

    function increase(){
        setQuantity(quantity + 1);
    }

    function decrease(){
        if(quantity > 1){
            setQuantity(quantity - 1);
        }
    }

    return(
        <div className="d-flex justify-content-center align-items-center gap-2">

            <button className="btn btn-sm btn-outline-secondary" onClick={decrease}>-</button>

            <span>{quantity}</span>

            <button className="btn btn-sm btn-outline-secondary" onClick={increase}>+</button>

        </div>
    );
}

export default QuantityPicker;
