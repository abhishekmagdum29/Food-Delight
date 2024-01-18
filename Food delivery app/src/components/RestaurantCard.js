import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  let { resData } = props;

  const { name, cuisines, areaName, avgRating, cloudinaryImageId, sla } =
    resData?.info;

  return (
    <div className=" w-72  my-2 outline-0  p-2 hover:shadow-xl shadow-gray-500/50 border rounded-xl hover:-translate-y-1 hover:scale-105 transition ease-in-out delay-100 duration-200">
      <img className="rounded-xl" src={CDN_URL + cloudinaryImageId}></img>

      <div className="h-16  p-1 ">
        <h3 className="font-bold text-[#000000c0] mt-3 text-lg line-clamp-1 ">
          {name}
        </h3>
        <h4 className="text-[#3D4152]  text-base mt-2 line-clamp-1">
          {cuisines.join(", ")}
        </h4>
        <h4 className="text-[#3d4152c8]  text-base">{areaName}</h4>
      </div>

      <div className="flex mt-12 h-9 p-1 my-3 justify-between items-center">
        <div
          className={
            avgRating >= 4
              ? "w-14  bg-green-700 rounded-md flex justify-center items-center"
              : "w-14  bg-orange-600 rounded-md flex justify-center items-center"
          }
        >
          <p className="py-1 text-white font-bold text-sm">{avgRating} ★</p>
        </div>
        <p className="text-[#3d4152c8]  text-sm">{sla?.slaString}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
