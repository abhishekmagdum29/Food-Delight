import { useSelector } from "react-redux";
import {
  addItem,
  clearItem,
  decreaseCartItems,
  getTotal,
} from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { useState } from "react";
import CartEmptyImage from "./CartEmptyImage";
import { useEffect } from "react";

const Cart = () => {
  const [checked, setChecked] = useState(false);

  const cartItems = useSelector((store) => store.cart.items);


  const cartTotalQuantity = useSelector(
    (store) => store.cart.cartTotalQuantity
  );

  const cartTotalAmount = useSelector((store) => store.cart.cartTotalAmount);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cartItems]);

  const increaseItemsCount = (item) => {
    dispatch(addItem(item));
  };

  const decreaseItemsCount = (item) => {
    dispatch(decreaseCartItems(item));
  };

  const clearCart = () => {
    dispatch(clearItem());
  };

  return cartItems.length === 0 ? (
    <CartEmptyImage />
  ) : (
    <div className="h-[80vh]">
      <div className=" w-4/5 mx-auto mt-32  flex">
        <div className="w-1/2  p-6 mx-6 bg-slate-50 border outline-none shadow-md">
          <div className=" mb-4 bg-white">
            <p className="text-2xl font-semibold p-4 text-[#3D4152]">
            Account
            </p>
            <p className="text-lg font-medium p-4 text-[#3D4152]">
            To place your order now, log in to your existing account or sign up.
            </p>
          </div>
          <div className=" my-12 bg-white">
            <button className="w-28 px-4 py-2  mx-10 text-xl font-semibold rounded-md my-5 border border-green-600  text-green-600">
              Login
            </button>
            <button className="w-28 px-4 py-2  text-xl font-semibold rounded-md my-5 border bg-green-600  text-white">
              Sign up
            </button>
          </div>
        </div>

        <div className="border outline-none shadow-md mt-1 mx-1 w-[48%] h-[545px] overflow-auto bg-slate-50">
          <div className="flex justify-between items-center border-b-2 mt-9 w-[88%] mx-auto">
            <div className="flex">
              <p className="mb-3 font-semibold">Cart items</p>
              <span className="pl-3 font-bold text-[#ff0000d7]  ">
                {cartTotalQuantity}
              </span>
            </div>
            <button
              className="mb-3  w-24 py-1 px-2 mr-2 rounded-md bg-red-600 text-white hover:bg-red-500"
              onClick={() => clearCart()}
            >
              Cleat cart
            </button>
          </div>

          {cartItems.map((item) => (
            <div
              key={item?.card?.info?.id}
              className="flex w-[88%] mx-auto justify-between "
            >
              <div className="flex my-2 items-center w-[70%] ">
                <img
                  className="w-[70px] mr-2 rounded-md"
                  src={CDN_URL + item?.card?.info?.imageId}
                  alt="img"
                />
                <p className="text-sm text-[#3D4152] font-medium">
                  {item?.card?.info?.name}
                </p>
              </div>

              <div className="flex items-center   w-[30%] ">
                <div className="flex justify-between items-center font-poppins w-20 h-7 border bg-slate-50 text-black  px-2 mr-3 ml-5 border-green-400 outline-none">
                  <button
                    className="text-green-600"
                    onClick={() => decreaseItemsCount(item)}
                  >
                    -
                  </button>
                  <span className="text-green-600">{item?.cartQuantity}</span>
                  <button
                    className="text-green-600"
                    onClick={() => increaseItemsCount(item)}
                  >
                    +
                  </button>
                </div>
                <p className="text-sm text-[#3D4152] font-semibold">
                  ₹
                  {Math.floor(
                    item?.card?.info?.price / 100 ||
                      item?.card?.info?.defaultPrice / 100
                  ) * item?.cartQuantity}
                </p>
              </div>
            </div>
          ))}

          <div className="w-[88%] border mx-auto my-3 p-3 bg-white ">
            <div className="flex items-center ">
              <input
                className="cursor-pointer"
                type="checkbox"
                defaultChecked={checked}
                onChange={() => setChecked(!checked)}
              />
              <p className="ml-3 text-[#3D4152] font-semibold">
                Opt in for No-contact Delivery
              </p>
            </div>

            {checked ? (
              <p className="text-justify ml-6 text-sm text-[#3D4152]">
                Our delivery partner will call to confirm. Please ensure that
                your address has all the required details.
              </p>
            ) : (
              <p className="text-justify ml-6 text-sm text-[#3D4152]">
                Unwell, or avoiding contact? Please select no-contact delivery.
                Partner will safely place the order outside your door (not for
                COD)
              </p>
            )}
          </div>

          <div className=" w-[88%] mx-auto h-44">
            <p className="text-[#3D4152] font-semibold text-sm ml-3">
              Bill details
            </p>
            <div className="flex justify-between items-center border-b  mt-2 ">
              <p className="text-sm text-[#3D4152] mb-4 ml-3">total</p>
              <p className="text-sm text-[#3D4152] mb-4 mr-2">
                ₹ {cartTotalAmount}
              </p>
            </div>
            <div className="flex justify-between items-center mt-2 border-b-2 border-black">
              <p className="text-sm text-[#3D4152] ml-3 mb-4">
                GST & Restaurant Charges
              </p>
              <p className="text-sm text-[#3D4152]  mr-2 mb-4">₹ 18</p>
            </div>
            <div className="flex justify-between items-center mt-2 text-[#3D4152]">
              <p className="ml-3 font-semibold text-lg ">TO PAY</p>
              <p className="mr-2 font-bold text-lg">₹ {cartTotalAmount + 18}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
