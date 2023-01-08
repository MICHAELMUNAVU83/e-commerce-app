import React ,{useContext} from 'react'
import {BsCartFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'

function NavBar() {
    const {saved} = useContext(RoomContext)

  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/" style={{textDecoration: "none", color: "black"}} className="navbar-brand">
        <img
          src="/docs/4.0/assets/brand/bootstrap-solid.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />

        HOME
      </Link>
      <Link to="/cart" style={{textDecoration: "none", color: "black"}} className="d-flex justify-content-end mx-4">
        <h4>CART</h4>
        <BsCartFill style={{fontSize: "25px", color: "#f55a98"}} className="mx-2"/>
        <h4>{saved.length}</h4>
        </Link>
       
    </nav>
  );
}

export default NavBar;
