import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useDispatch, useSelector } from "react-redux";
import { PiShoppingBagLight } from "react-icons/pi";
import { getTotal } from "../utils/cartSlice";
import { RxDotFilled } from "react-icons/rx";

const Header = () => {
  const [btnLogin, setbtnLogin] = useState("Login");
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);

  useEffect(() => {
    dispatch(getTotal());
  }, [cartItems]);

  const cartTotalQuantity = useSelector(
    (store) => store.cart.cartTotalQuantity
  );

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between items-cente border-b shadow-md mb-3 bg-slate-50 w-full fixed top-0">
      <div className="flex items-center ml-2 ">
        <Link to="/">
          <img data-testid="logo" className="w-12 m-4" src={LOGO_URL}></img>
        </Link>
        <Link to="/">
          <p className="text-3xl font-extrabold italic text-[#ff0000d7] m-1">
            Food Delight
          </p>
        </Link>
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4 items-center justify-between">
          <li data-testid="online-status" className="px-5 text-[#3D4152]">
            {onlineStatus ? (
              <RxDotFilled className="text-green-600 text-lg" />
            ) : (
              <RxDotFilled className="text-red-600 text-lg" />
            )}
          </li>

          <li className="px-4 font-medium text-[#3D4152] hover:text-[#ff0000d7]">
            <Link to="/">Home</Link>
          </li>

          <li className="px-4 font-medium text-[#3D4152] hover:text-[#ff0000d7]">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4 font-medium text-[#3D4152] hover:text-[#ff0000d7]">
            <Link to="/help">Help</Link>
          </li>

          <li className="px-4 font-medium text-[#3D4152] hover:text-[#ff0000d7]">
            <div className="flex items-center">
              <PiShoppingBagLight className="text-2xl" />
              <Link className="pl-2" to="/cart">
                Cart
              </Link>
              <span className="pl-2 font-bold hover:text-[#ff0000d7]  ">
                {cartTotalQuantity}
              </span>
            </div>
          </li>
        </ul>

        <button
          className=" mr-8 w-16 px-2 py-1 text-[#3D4152] hover:text-white border-[1px] border-[#00000028] outline-0 transition-all ease-in-out duration-300 hover:bg-[#ff0000cb]  rounded-md text-[16px]"
          onClick={() => {
            btnLogin === "Login" ? setbtnLogin("Logout") : setbtnLogin("Login");
          }}
        >
          {btnLogin}
        </button>
      </div>
    </div>
  );
};

export default Header;
