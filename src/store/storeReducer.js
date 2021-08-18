const types = {
  AUTH_LOGIN: "AUTH_LOGIN",
  AUTH_LOGOUT: "AUTH_LOGOUT",
  PRODUCT_DELETE_ALL: "PRODUCT_DELETE_ALL",
  PRODUCT_CHANGE: "PRODUCT_CHANGE",
};

const initialStore = {
  user: { id: 1, name: "Leo" },
  products: [
    { id: 1, title: "Product #1" },
    { id: 2, title: "Product #2" },
  ],
};
const storeReducer = (state, action) => {
  switch (action.type) {
    case types.AUTH_LOGOUT:
      return { ...state, user: null };
    case types.AUTH_LOGIN:
      return { ...state, user: action.payload };
    case types.PRODUCT_DELETE_ALL:
      return { ...state, products: [] };
    case types.PRODUCT_CHANGE:
      return { ...state, products: [{ id: 3, title: "Product #3" }] };

    default:
      return state;
  }
};

export { initialStore, types };
export default storeReducer;
