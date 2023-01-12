import React, { useContext, useEffect, useState } from "react";
import { RoomContext } from "../context";
import EachCartProduct from "../components/EachCartProduct";

function Cart() {
  const { saved } = useContext(RoomContext);
  const { removeFromArray } = useContext(RoomContext);

  const [totalPrice, setTotalPrice] = useState(totalPrice);

  useEffect(() => {
    if (saved.length === 0) {
      setTotalPrice(0);
    } else {
      saved.map((product) => {
        setTotalPrice(
          Number(product.price) + Number(totalPrice)
        )
      });
    }
  }, [saved]);

  if (saved.length === 0) {
    return (
      <div
        key="no-houses"
        className="d-flex flex-wrap container justify-content-center my-2"
      >
        <div>
          <h3>NO CLOTHES IN CART</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="d-flex flex-wrap container justify-content-center my-2">
        {saved.map((product) => (
          <EachCartProduct
            key={product.id}
            product={product}
            removeFromArray={removeFromArray}
          />
        ))}
        {totalPrice}
      </div>
    );
  }
}

export default Cart;
