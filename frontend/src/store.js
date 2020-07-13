import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import {
    productListReducer,
    productDetailsReducer,
    productSaveReducer,
    productDeleteReducer
} from "./reducers/productReducers";
import { userSigninReducer, userRegisterReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducers";
import thunk from "redux-thunk";
import * as Cookie from "js-cookie";

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState = { cart: { cartItems, shipping:{}, payment:{} }, userSignin: { userInfo } };
const reducer = combineReducers({
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer,
    productSave: productSaveReducer,
    productDelete: productDeleteReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);
export default store;
