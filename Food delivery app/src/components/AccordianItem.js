import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const AccordianItem = ({ items }) => {
  if (!items) return null;

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2   flex border-b-2 border-gray-200 text-left justify-between"
        >
          <div className="w-3/4 ">
            <div className="py-2">
              <p className="text-lg font-semibold text-[#3D4152]">
                {item?.card?.info?.name}
              </p>
              <p className="font-normal text-[#3D4152]">
                ₹
                {Math.floor(
                  item?.card?.info?.price / 100 ||
                    item?.card?.info?.defaultPrice / 100
                )}
              </p>
            </div>
            <p className="text-sm my-3 text-[#3d4152a4] font-normal">
              {item?.card?.info?.description}
            </p>
          </div>

          <div className="w-1/4  p-2  ">
            <img
              className=" rounded-lg"
              src={CDN_URL + item?.card?.info?.imageId}
              alt=""
            />
            <button
              className=" px-2 py-1 mt-2 w-20 ml-10 rounded-lg bg-red-600 text-white hover:bg-red-500 "
              onClick={() => {
                handleAddItem(item);
              }}
            >
              Add
            </button>
          </div>
        </div>
        //
      ))}
    </>
  );
};

export default AccordianItem;
