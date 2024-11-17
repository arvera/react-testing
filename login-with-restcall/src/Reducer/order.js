import { 
    ORDER_CANCELED,
    ORDER_FAIL,
    ORDER_OITEM_ADDED,
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
        case ORDER_CANCELED:
            return{
                ...state,
            }
        case ORDER_OITEM_ADDED:
            return{
                ...state,
                orderItems: [
                    ...state.orderItems,
                    {
                        oid: action.payload,
                    }
                ]
            }
        default:
            return state;
        
    }
}
