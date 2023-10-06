import { createContext } from "react";

const UserContext = createContext({
  user: {
    userName: "Default name"
    
  },
});

export default UserContext;
