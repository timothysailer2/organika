import { useState } from "react";

function QuantityPicker(props){

    const [quantity,setQuantity] = useState(1);

    function increase(){

        const value = quantity + 1;
        setQuantity(value);
        props.onChange(value);

    }

    function decrease(){

        if(quantity > 1){

            const value = quantity - 1;
            setQuantity(value);
            props.onChange(value);

        }

    }

    return(

        <div className="d-flex justify-content-center align-items-center gap-2">

            <button className="btn btn-sm btn-outline-secondary" onClick={decrease}>
                -
            </button>

            <span>{quantity}</span>

            <button className="btn btn-sm btn-outline-secondary" onClick={increase}>
                +
            </button>

        </div>

    );

}

export default QuantityPicker;
