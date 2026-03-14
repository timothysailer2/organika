import { getCatalog } from "../services/dataService";
import Product from "./Product";
import "../styles/catalog.css";

function Catalog(props){

    const catalog = getCatalog();

    return(

        <div className="container mt-4">

            <h2 className="text-center mb-4">
                Organic Products
            </h2>

            <div className="row">

                {catalog.map(prod => (

                    <Product
                        key={prod.id}
                        data={prod}
                        onAdd={props.onAdd}
                    />

                ))}

            </div>

        </div>

    );
}

export default Catalog;
