import { createStore, combineReducers, applyMiddleware } from "redux";
import { loginUsers } from "./redux/reducers/loginreducer";
import { products } from "./redux/reducers/productreducer";
import { cartReducer, postCartReducers } from "./redux/reducers/cartreducer";
import { userIdReducer } from "./redux/reducers/getuseridreducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//import rootReducer from "./reducers";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["loginUsers", "products"],
};
const rootStore = combineReducers({
  loginUsers,
  products,
  cartReducer,
  postCartReducers,
  userIdReducer,
});
const persistedReducer = persistReducer(persistConfig, rootStore);

const store = createStore(
  persistedReducer,

  composeWithDevTools(applyMiddleware(thunk))
);
let persistor = persistStore(store);
export { store, persistor };
