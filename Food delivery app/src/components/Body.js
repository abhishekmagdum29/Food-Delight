import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./shimmer";
import { Link } from "react-router-dom";
import { swiggy_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    let data = await fetch(swiggy_URL);
    let json = await data.json();

    setlistOfRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div className="w-3/4 mt-44 text-center text-black mx-auto h-[100vh]  ">
        <p className="text-4xl font-bold">
          No internet connectivity. Please check your network
        </p>
      </div>
    );
  }

  if (!listOfRestaurants) return null;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="mx-auto w-[870px]  mt-28  ">
        <button
          className="m-3 w-24 px-2 py-2 rounded-xl outline-0 border border-[#00000028] text-[#3D4152] hover:text-white
          transition-all ease-in-out duration-300
          hover:bg-[#ff0000cb] "
          onClick={() => {
            let filterData = listOfRestaurants.filter(
              (res) => res?.info?.avgRating > 4
            );

            setfilteredRestaurants(filterData);
          }}
        >
          Rating 4+
        </button>

        <button
          className="m-3 w-28 px-2 py-2 rounded-xl outline-0 border border-[#00000028] text-[#3D4152] hover:text-white
          transition-all ease-in-out duration-300
          hover:bg-[#ff0000cb] "
          onClick={() => {
            let data = listOfRestaurants.filter(
              (res) => res?.info?.sla?.deliveryTime < 20
            );
            console.log(data);
            setfilteredRestaurants(data);
          }}
        >
          Fast Delivery
        </button>

        <button
          className="m-3 w-24 px-2 py-2 rounded-xl outline-0 border border-[#00000028] text-[#3D4152] hover:text-white
          transition-all ease-in-out duration-300
          hover:bg-[#ff0000cb] "
          onClick={() => {
            let vegList = listOfRestaurants.filter(
              (res) => res?.info?.veg === true
            );
            setfilteredRestaurants(vegList);
          }}
        >
          Pure Veg
        </button>

        <input
          className="border border-[#00000028] w-[380px] px-2 py-2 rounded-xl outline-0 mx-4 focus:outline-none focus:border-red-500 shadow-md"
          type="text"
          placeholder="Search for restaurant"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>

        <button
          className="border border-[#00000028] px-2 py-2 outline-0 rounded-xl text-[#3D4152] m-1 hover:text-white
          transition-all ease-in-out duration-300
          hover:bg-[#ff0000cb]"
          onClick={() => {
            let filteredList = listOfRestaurants.filter((res) => {
              return res?.info?.name
                ?.toLowerCase()
                ?.includes(searchText.toLowerCase());
            });
            setfilteredRestaurants(filteredList);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap justify-center items-center   my-5 gap-6">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
