import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setonlineStatus] = useState(true);

  useEffect(() => {
    checkOnline = () => {
      setonlineStatus(true);
    };

    checkOffline = () => {
      setonlineStatus(false);
    };

    window.addEventListener("online", checkOnline);
    window.addEventListener("offline", checkOffline);

  
    
  }, []);

  return onlineStatus;
};
export default useOnlineStatus;
