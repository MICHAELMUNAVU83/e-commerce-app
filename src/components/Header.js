import React from "react";
import { MdHighQuality } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { WiStrongWind } from "react-icons/wi";
import { TbTruckDelivery } from "react-icons/tb";

function Header({ filterQuery, setFilterQuery }) {
  return (
    <div>
      <div className="header-div">
        <div className="header-text d-flex flex-column align-items-start justify-content-center py-5 px-5">
          <h3 className="bakbak-font">Clothes Store</h3>
          <h1 className="fjalla-font">Making beautiful clothes</h1>
          <h1 className="fjalla-font">A Part of your life</h1>

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
            Shop Now
          </button>
        </div>
      </div>

      <div className="container d-flex justify-content-around py-5">
        <div className="d-flex flex-row align-items-center">
          <MdHighQuality size={70} color="#f55a98" className="mx-1" />
          <div className="d-flex flex-column align-items-start justify-content-center">
            <h5>High Quality</h5>
            <p>High Quality Products</p>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center">
          <GiTakeMyMoney size={70} color="#f55a98" className="mx-1" />
          <div className="d-flex flex-column align-items-start justify-content-center">
            <h5>Affordable</h5>
            <p>Affordable Products</p>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center">
          <WiStrongWind  size={70} color="#f55a98" className="mx-1" />
          <div className="d-flex flex-column align-items-start justify-content-center">
            <h5>Long Lasting</h5>
            <p>Long Lasting Products</p>
          </div>
        </div>
        <div className="d-flex flex-row align-items-center">
          <TbTruckDelivery size={70} color="#f55a98" className="mx-1" />
          <div className="d-flex flex-column align-items-start justify-content-center">
            <h5>Fast Delivery</h5>
            <p>Fast Delivery Products</p>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-center py-5">
        <input type="text" placeholder="Search for a product" className="form-control w-50" value={filterQuery} onChange={(e) => {
          setFilterQuery(e.target.value)
          console.log(e.target.value)
        }
        } />
      </div>
    </div>
  );
}

export default Header;
