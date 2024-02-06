import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./shimmer";
import { Link } from "react-router-dom";
import { swiggy_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  
  const [animationParent]=useAutoAnimate()

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    let data = await fetch(swiggy_URL);
    let json = await data.json();

    setlistOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const clearSearchText = () => {
    setsearchText("");
    setfilteredRestaurants([]);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div className="w-3/4 mt-64 text-center text-red-600 mx-auto h-[100vh]  ">
        <p className="text-5xl font-bold">
          No internet connectivity. Please check your network
        </p>
      </div>
    );
  }

  if (!listOfRestaurants) return null;

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="mx-auto w-[920px] flex justify-evenly items-center mt-28  ">
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
          className="border border-[#00000028] w-[390px] px-2 py-2 rounded-xl outline-0 mx-4 focus:outline-none focus:border-red-500 shadow-md"
          type="text"
          placeholder="Search for restaurant and food"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        ></input>
        {searchText && (
          <AiOutlineClose
            className="relative right-14 text-[#3D4152] text-lg cursor-pointer"
            onClick={clearSearchText}
          />
        )}
        <button
          className="border border-[#00000028] px-2 py-2 outline-0 rounded-xl text-[#3D4152] m-1 hover:text-white
          transition-all ease-in-out duration-300
          hover:bg-[#ff0000cb]"
          onClick={() => {
            let filteredList = listOfRestaurants.filter((res) => {
              return res?.info?.cuisines
                .toString()
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setfilteredRestaurants(filteredList);
          }}
        >
          Search
        </button>
      
      </div>

      <div className="flex flex-wrap justify-center items-center my-5 gap-6">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} ref={animationParent}/>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
