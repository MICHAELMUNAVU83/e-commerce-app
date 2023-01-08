import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineHotelClass } from "react-icons/md";

function EachProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [rating, setRating] = useState("");
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setRating(Math.floor(data.rating.rate));
      });
  }, []);

  return (
    <div className="d-flex justify-content-center container mt-5">
      <div className="card p-3 bg-white">
        <MdOutlineHotelClass />
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
          <div className="d-flex justify-content-between p-price">
            <span>Rating </span>
            <span>
              {[...Array(rating)].map((star) => {
                return <span className="star">&#9733;</span>;
              })}
            </span>
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
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default EachProduct;
