import {
    ORDER_CREATED,
    ORDER_FAIL,
    ORDER_CANCELED,
    ORDER_DISCOUNTED,
    ORDER_PAYED,
    ORDER_OITEM_ADDED,
    ORDER_OITEM_SELECTED,
    ORDER_OITEM_REMOVED,
    ORDER_OITEM_GSTMODIFIER,
    SET_MESSAGE,
} from "./types";

import OrderService from "../Services/order.service";

export const newOrder = () => (dispatch) => {
    return OrderService.createOrder().then(
        (data) => {
            dispatch ({
                type: ORDER_SUCCESS,
                payload: {order: data },
            });
            return Promise.resolve();
        },
        (error) => {
            const message = 
            (error.response && 
                error.response.data &&
                error.response.data.message
            ) ||
            error.message || error.toString();
              dispatch({
                  type: ORDER_FAIL,
              });
              dispatch({
                  type: SET_MESSAGE,
                  payload: message,
              });
            return Promise.reject();
        }
    )
};
