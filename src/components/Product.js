import React from "react";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <Link to={`/product/${product.id}`} style={{textDecoration: "none", color: "black"}}>
    <div className="card mx-3 my-3 p-2" style={{ width: "18rem" , border:"pink solid 1px"}}>
      <img className="card-img-top img-fluid"  src={product.image} alt="Card image cap" style={{height: "300px"}} />
      <div className="card-body">
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
    </Link>
  );
}

export default Product;
