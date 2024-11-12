import {
    ORDER_SUCCESS,
    ORDER_FAIL,
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
