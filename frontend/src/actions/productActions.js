import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL
} from "../constants/productConstants";
import Axios from "axios";

const listProducts = () => async dispatch => {
    try {
        dispatch(PRODUCT_LIST_REQUEST);
        const { data } = await Axios.get("/api/products");
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
    }
};

export {listProducts}