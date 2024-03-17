import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ShimmerMenu } from "./components/shimmer";
import Cart from "./components/Cart";
import store from "./utils/store";
import { Provider } from "react-redux";
import { getTotal } from "./utils/cartSlice";
import Footer from "./components/Footer";
import Error from "./components/Error";

const Help = lazy(() => import("./components/Help"));

const Applayout = () => {
  store.dispatch(getTotal());

  return (
    <Provider store={store}>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
};

// Router configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },

      {
        path: "/help",
        element: (
          <Suspense fallback={<ShimmerMenu />}>
            <Help />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement:<Error/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
