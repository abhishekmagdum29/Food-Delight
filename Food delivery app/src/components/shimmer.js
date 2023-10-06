//  const Shimmer = () => {
//   return (
//     <div className="shimmer-container">
//       {Array(15)
//         .fill("")
//         .map((element,index) => (
//           <div key={index} className="shimmer-card"></div>
//         ))}
//     </div>
//   );
// };

// export default Shimmer;

export const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center items-center my-5 gap-6 mt-44">
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
            <div className="w-[272px] h-[174px]  bg-gray-200 rounded-xl "></div>
            <div className="w-[218px] h-[18px] bg-gray-200  my-4 ml-2 "></div>
            <div className="w-[168px] h-[13px] bg-gray-200  mt-5 ml-2 "></div>
            <div className="w-[90px] h-[13px] bg-gray-200 my-5 ml-2  "></div>
          </div>
        ))}
    </div>
  );
};

export const ShimmerMenu = () => {
  return (
    <div>
      <div className="border mx-auto w-[68%] bg-gray-200 mt-2  h-[288px]"></div>
      {Array(20)
        .fill("")
        .map((element, index) => (
          <div
            key={index}
            className="my-4  h-[75px] rounded-md mx-auto w-6/12 bg-gray-200"
          ></div>
        ))}
    </div>
  );
};
