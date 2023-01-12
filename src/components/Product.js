import React from "react";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Link to={`/product/${product.id}`} style={{textDecoration: "none", color: "black"}}>
    <div className="card mx-3 my-3 p-2" style={{ width: "18rem" , border:"pink solid 1px", height: "450px"}}>
      <img className="card-img-top img-fluid"  src={product.image} alt="Card  cap" style={{height: "300px", width: "300px"}}/>

      <div className="card-body">
        <p className="card-text text-center">
            <h5 className="sofia-font  font-bold">{product.title}</h5>
        </p>
      </div>
    </div>
    </Link>
  );
}

export default Product;
