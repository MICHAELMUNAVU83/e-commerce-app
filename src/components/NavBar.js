import React, { useContext } from "react";
import { BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import { AiFillHome } from "react-icons/ai";

function NavBar() {
  const { saved } = useContext(RoomContext);

  return (
    <nav className="navbar navbar-light bg-light">
      <Link
        to="/"
        style={{ textDecoration: "none", color: "black" }}
        className="navbar-brand d-flex justify-content-start mx-4"
      >
        <AiFillHome
          style={{ fontSize: "25px", color: "#f55a98" }}
          className="mx-2"
        />

        <h2 className="italic-font">HOME</h2>
      </Link>

      <Link to="/checkout" className="d-flex justify-content-center mx-4 text-decoration-none text-dark fw-bold">
        <h2 className="italic-font text-center text-decoration-none">
          CHECKOUT
        </h2>
      </Link>
      <Link
        to="/cart"
        style={{ textDecoration: "none", color: "black" }}
        className="d-flex justify-content-end mx-4"
      >
        <h2 className="italic-font">CART</h2>
        <BsCartFill
          style={{ fontSize: "25px", color: "#f55a98" }}
          className="mx-2"
        />
        <h2 className="italic-font">{saved.length}</h2>
      </Link>
    </nav>
  );
}

export default NavBar;
