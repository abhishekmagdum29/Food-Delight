import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setonlineStatus] = useState(true);

  useEffect(() => {
    const checkOnline = () => {
      setonlineStatus(true);
    };

    const checkOffline = () => {
      setonlineStatus(false);
    };

    window.addEventListener("online", checkOnline);
    window.addEventListener("offline", checkOffline);
  }, []);

  return onlineStatus;
};
export default useOnlineStatus;
