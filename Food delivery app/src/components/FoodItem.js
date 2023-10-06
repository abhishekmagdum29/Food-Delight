import { useSelector, useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { clearCart } from "../utils/cartSlice";

const FoodItem = ({ cartInfo }) => {
  const { name, price, description, imageId } = cartInfo?.card?.info;

  // const cartItems = useSelector((store) => store.cart.items);

  // const dispatch = useDispatch();

  // const clearCartItems = () => {
  //   dispatch(clearCart());
  // };

  return (
    <div className="m-3 w-60 p-3  ">
      <img src={CDN_URL + imageId} alt="img" />
      <h2>{name}</h2>
      <h2>Rs.{price / 100} </h2>
      <h2>{description}</h2>
      {/* <button
        className="ml-5 mt-2  bg-red-500 p-1   text-white rounded-md hover:bg-red-600"
        onClick={() => clearCartItems(cartItems)}
      >
        Remove
      </button> */}
    </div>
  );
};

export default FoodItem;
