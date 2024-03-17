export const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center items-center my-5 gap-6 mt-44 animate-pulse">
      {Array(20)
        .fill("")
        .map((element, index) => (
          <div
            key={index}
            className="w-72 h-[340px]  my-2 outline-0 
            p-2
             rounded-lg
             border
            "
          >
            <div className="w-[272px] h-[174px]  bg-gray-300 rounded-xl "></div>
            <div className="w-[218px] h-[14px] bg-gray-300  my-4 ml-2  rounded-md"></div>
            <div className="w-[168px] h-[10px] bg-gray-300  mt-5 ml-2 rounded-md"></div>
            <div className="w-[90px] h-[10px] bg-gray-300 my-5 ml-2  rounded-md"></div>
          </div>
        ))}
    </div>
  );
};

export const ShimmerMenu = () => {
  return (
    <div>
      <div className="border mx-auto w-[70%] bg-gray-300 mt-[115px] rounded-xl  h-[288px] animate-pulse"></div>
      {Array(20)
        .fill("")
        .map((element, index) => (
          <div
            key={index}
            className="my-4 w-[70%] h-[75px] rounded-md mx-auto  bg-gray-300"
          ></div>
        ))}
    </div>
  );
};
