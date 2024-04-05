import { ShimmerMenu } from "./shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurntMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCatagory";
import { IoTimeOutline } from "react-icons/io5";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurantMenu = useRestaurntMenu(resId); // custom hook for fetching indivisual restaurant data

  if (!restaurantMenu) return <ShimmerMenu />;
  
  console.log(restaurantMenu);

  const {
    name,
    avgRating,
    costForTwoMessage,
    cuisines,
    cloudinaryImageId,
    locality,
    areaName,
    sla,
  } = restaurantMenu?.cards[2]?.card?.card?.info;

  const catagories =
    restaurantMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <>
      <div className="border mx-auto mt-28 w-[70%] flex  py-10 bg-[#35495e] text-white rounded-xl shadow-md">
        <img
          className="w-[345px] ml-48 rounded-lg"
          src={CDN_URL + cloudinaryImageId}
          alt="img"
        />
        <div className="ml-8">
          <div>
            <p className="text-3xl font-semibold">{name}</p>
            <p className="font-medium mt-2 ml text-lg">{cuisines.join(", ")}</p>
            <p className=" mt-1 font-light">
              {areaName}, {locality}
            </p>
          </div>
          <div className="mt-20 flex justify-between w-[350px] text-lg font-medium">
            <div
              className={
                avgRating >= 4
                  ? "w-14  bg-green-700 rounded-md flex justify-center items-center "
                  : "w-14  bg-orange-600 rounded-md flex justify-center items-center"
              }
            >
              <p className="py-1 text-white font-bold text-sm  ">
                {avgRating} ★
              </p>
            </div>
            <div className="border-r-2"></div>
            <p>{costForTwoMessage}</p>
            <div className="border-r-2"></div>
            <p className="flex justify-center items-center ">
              <IoTimeOutline className="mr-2" /> {sla?.deliveryTime} mins
            </p>
          </div>
        </div>
      </div>

      {catagories.map((category) => (
        <RestaurantCategory key={category?.card?.card?.title} data={category} />
      ))}
    </>
  );
};

export default RestaurantMenu;
