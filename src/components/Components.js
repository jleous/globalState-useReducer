import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import { types } from "../store/storeReducer";

export const Components = () => {
  const [store, dispatch] = useContext(StoreContext);
  const { user, products } = store;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <h3>Global State</h3>
            <div className="card-body">
              <h4>User: {user?.name}</h4>
              <button
                className="btn btn-info"
                onClick={() =>
                  dispatch({
                    type: types.AUTH_LOGIN,
                    payload: { id: 2, name: "Leo" },
                  })
                }
              >
                Loging
              </button>
              <button
                className="btn btn-warning"
                onClick={() => dispatch({ type: types.AUTH_LOGOUT })}
              >
                Logout
              </button>
              <h4>Products</h4>
              <ul>
                {products?.map((product) => (
                  <li key={product.id}>Title: {product.title}</li>
                ))}
              </ul>
              <button className="btn btn-danger" onClick={()=>dispatch({type:types.PRODUCT_DELETE_ALL})}>Delete All</button>
              <button className="btn btn-warning" onClick={()=>dispatch({type:types.PRODUCT_CHANGE})}>Change</button>
            </div>
          </div>
        </div>
        <div className="col-md-6"></div>
      </div>
      Components
    </div>
  );
};
