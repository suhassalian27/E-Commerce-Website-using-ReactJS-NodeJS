import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import {
    productListReducer,
    productDetailsReducer
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import thunk from "redux-thunk";
import * as Cookie from "js-cookie";
import { userSigninReducer } from "./reducers/userReducer";

const cartItems = Cookie.getJSON("cartItems") || [];

const initialState = { cart: { cartItems } };
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);
export default store;
