import React, { createContext, useState } from "react";
export const RoomContext = createContext();

export function RoomProvider({ children }) {
  let totalPrice = 0;
  const [saved, setSaved] = useState([]);
  const addCart = (obj) => {
    setSaved((prevState) => [...prevState, obj]);
  };
  const removeFromArray = (objectid) => {
    setSaved((prevState) =>
      prevState.filter((product) => {
        return product.id !== objectid;
      })
    );
  };

  const addTotalPrice = (price) => {
    totalPrice += price;
  };

  return (
    <RoomContext.Provider
      value={{ saved, addCart, removeFromArray, totalPrice , addTotalPrice}}
    >
      {children}
    </RoomContext.Provider>
  );
}
export const RoomConsumer = RoomContext.Consumer;
