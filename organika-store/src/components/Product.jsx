import QuantityPicker from "./QuantityPicker";
import "../styles/product.css";

function Product(props){

    const product = props.data;

    return(

        <div className="col-lg-3 col-md-4 col-sm-6 mb-4">

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

                    <QuantityPicker />

                    <button
                        className="btn btn-success mt-2"
                        onClick={props.onAdd}
                    >
                        Add To Cart
                    </button>

                </div>

            </div>

        </div>

    );
}

export default Product;
