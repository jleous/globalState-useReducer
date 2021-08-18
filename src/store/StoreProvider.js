import { createContext, useReducer } from "react";
import storeReducer, { initialStore } from "./storeReducer";

const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, initialStore);
  const data = [store, dispatch];
  return <StoreContext.Provider value={data}>{children}</StoreContext.Provider>;
};
export { StoreContext };
export default StoreProvider;
