import React, { useContext } from "react";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";

function Cart() {
  const { saved } = useContext(RoomContext);
  const { removeFromArray } = useContext(RoomContext);

  if (saved.length === 0) {
    return (
      <div key="no-houses" className="no-houses-div">
        <div>
          <h3>NO HOUSES SAVED YET</h3>
        </div>
      </div>
    );
  } else {
    return (
      <div className="saved-rooms-div">
        {saved.map((save) => (
          <div key={save.id} className="saved-rooms">
            <div className="saved-rooms-img">
              <img src={save.image} alt="saved room" />
            </div>
            <button onClick={() => removeFromArray(save.id)}>Remove</button>
            
          </div>
        ))}
      </div>
    );
  }
}

export default Cart;
