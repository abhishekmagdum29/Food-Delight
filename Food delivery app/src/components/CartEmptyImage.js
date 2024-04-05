import React from "react";
import  empty_cart_image_URL  from "../assets/images/2xempty_cart_yfxml0.webp"
import { Link } from "react-router-dom";

const CartEmptyImage = () => {
  return (
    <div className="h-[76vh]">
      <div className="mx-auto w-[405px] h-[325px] mt-[130px]">
        <img src={empty_cart_image_URL} alt="img" className="w-full" />
        <div className="w-full mx-auto mt-5">
          <p className="text-center text-xl font-semibold text-[#3D4152]">
            Your cart is empty
          </p>
          <p className="text-center text-[#3D4152] mt-1 text-sm font-medium">
            You can go to home page to view more restaurants
          </p>

          <Link to={"/"}>
            <button className="w-60 border px-2 py-2 ml-20 mt-5 text-white bg-red-500 font-semibold hover:shadow-lg hover:bg-red-600">
              SEE RESTAURANTS NEAR YOU
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartEmptyImage;
