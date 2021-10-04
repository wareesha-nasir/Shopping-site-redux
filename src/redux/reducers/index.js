import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./product_reducer";

const reducer=combineReducers({
allProducts:productReducer,
specificProduct:selectedProductReducer
})

export default reducer;