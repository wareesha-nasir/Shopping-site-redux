import { ActionTypes } from "../constants/actions_types"
export const setProduct=(products)=>{
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products
    };
};
export const seletedProduct=(products)=>{
    return{
        type:ActionTypes.SELECTED_PRODUCTS,
        payload:products
    };
};
export const removeProduct=()=>{
    return{
        type:ActionTypes.REMOVE_PRODUCTS
        
    };
};

