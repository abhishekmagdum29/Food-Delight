const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <div className=" text-center text-sm font-medium w-full  h-9 flex justify-center items-center bg-red-600  mt-8 bottom-0 left-0 right-0">
      <h1 className="text-sm font-medium text-slate-50">
        © {year} Food Delight
      </h1>
    </div>
  );
};

export default Footer;
