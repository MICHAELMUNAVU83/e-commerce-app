import React from 'react'
import { MdOutlineHotelClass } from "react-icons/md";


function EachCartProduct({ product, removeFromArray }) {
   
  
  return (
   
    <div className="card p-3 bg-white mx-3" style={{ width: "22rem", height: "600px" }} >
      <MdOutlineHotelClass style={{ fontSize: "30px" , color: "#f55a98"}} />
      <div className="about-product text-center mt-2">
        <img src={product.image} alt="product" style={{ height: "300px" }} />
        <div>
          <h4>{product.title}</h4>
          <h6 className="mt-0 text-black-50">{product.category}</h6>
        </div>
      </div>
      <div className="stats mt-2">
        <div className="d-flex justify-content-between p-price">
          <span>Price</span>
          <span>${product.price}</span>
        </div>
       
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button
          style={{
            backgroundColor: "#f55a98",
            color: "white",
            border: "none",
            borderRadius: "30px",
            padding: "10px 20px",
            marginTop: "20px",
          }}
          onClick={() => removeFromArray(product.id)}
        >
            Remove from Cart
        </button>
      </div>
    </div>
 
  )
}

export default EachCartProduct