import { 
    ORDER_FAIL,
    ORDER_SUCCESS,
 } from "../Actions/types";

 const user = JSON.parse(localStorage.getItem("order"));

 const initialState = {
    orderItems: [],
    orderId: 0,
    orderStatus: "",
    total: 0,
 };

export default function (state, initialState, action){
    const {type, payload} = action;
    switch(type){
        case ORDER_SUCCESS:
            return {
                ...state,
                orderId: payload.orderId,
            }
        case ORDER_FAIL:
            return{
                ...state,
            }
        default:
            return state;
        
    }
}
