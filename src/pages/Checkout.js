import React, { useContext, useEffect, useState } from "react";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";

function Checkout() {
  const { saved } = useContext(RoomContext);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (saved.length > 0) {
      let total = 0;
      saved.forEach((product) => {
        total += Number(product.price);
      });
      setTotalPrice(total);
    }
  }, [saved]);

  return (
    <div className="container">
      <h2 className="text-center">Checkout</h2>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Product Name</th>
            <th scope="col">Price</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          {saved.map((product) => (
            <tr>
              <th scope="row">
                <img
                  src={product.image}
                  alt="product"
                  className="img-fluid"
                  style={{ width: "100px", height: "100px" }}
                />
              </th>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <Link
                  to={`/product/${product.id}`}
                  className="text-decoration-none text-dark fw-bold"
                >
                  View Product
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center my-3">
        <h3>Total Price: ${totalPrice}</h3>
        <button
          className="mx-2"
          style={{
            backgroundColor: "#f55a98",
            color: "white",
            border: "none",
            borderRadius: "30px",
            padding: "10px 20px",
          }}
          onClick={() => {
            if (totalPrice > 0)
              alert(
                "Thank you for shopping with us! Your order has been placed."
              );
            else alert("Please add items to cart before checking out.");
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Checkout;
