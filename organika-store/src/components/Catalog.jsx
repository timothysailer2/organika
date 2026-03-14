import { useState } from "react";
import { getCatalog } from "../services/dataService";
import Product from "./Product";

function Catalog(props){
    
    const [category,setCategory] = useState("All");


  const catalog = getCatalog();

  const [search,setSearch] = useState("");

  const filtered = catalog.filter(prod =>
    prod.title.toLowerCase().includes(search.toLowerCase())
  );

  return(

    <div className="container mt-4">

      <h2 className="text-center mb-4">
        Our Organic Products
      </h2>

      <input
        className="form-control mb-4"
        placeholder="Search products..."
        onChange={(e)=>setSearch(e.target.value)}
      />

      <div className="row">

        {filtered.map(prod => (

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
