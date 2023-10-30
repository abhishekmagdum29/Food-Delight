import AccordianItem from "./AccordianItem";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const RestaurantCategory = (props) => {
  let { data, showItems } = props;

  if (!data) return null;

  const { title, itemCards } = data?.card?.card;

  

  const handleClick=()=>{
     props.setShowIndex()
  }

  return (
    <div className="my-4  mx-auto w-6/12 bg-gray-100 shadow-lg p-4  rounded-md">
      <div
        className="flex justify-between items-center cursor-pointer "
        onClick={() => handleClick()}
      >
        <p className="text-[#3D4152] text-lg p-2 font-bold ">
          {title} ({itemCards.length})
        </p>
        {showItems ? (
          <MdKeyboardArrowUp className="text-3xl font-semibold mr-4 text-[#3D4152]" />
        ) : (
          <MdKeyboardArrowDown className="text-3xl font-semibold mr-4 text-[#3D4152]" />
        )}
      </div>
      {showItems && <AccordianItem items={itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
