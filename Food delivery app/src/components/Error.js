import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  return (
    <div className="w-full h-[100vh] p-4 bg-slate-100">
      <div className=" mx-auto  mt-20  text-center text-red-600">
        <h1 className="text-3xl font-semibold">Oops!!</h1>
        <h2 className="text-3xl font-semibold mb-5">Something is wrong!!</h2>
        <div className="w-[350px] mx-auto mb-5">
          <img
            className="w-full object-cover "
            src={
              "https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg"
            }
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Error;
