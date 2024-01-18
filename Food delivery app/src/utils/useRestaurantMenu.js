import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurntMenu = (resId) => {
  const [restaurantMenu, setrestaurantMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    setrestaurantMenu(json.data);
  };
  return restaurantMenu;
};

export default useRestaurntMenu;
