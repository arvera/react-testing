import axios from "axios";
import authHeader from "./authHeader";

const API_URL = 'https://localhost:8080/api/order/';

class OrderService{
    createOrder(){
        return axios.get(API_URL+'newOrder');
    }
    deleteOrder(){
        return axios.get(API_URL+'deleteOrder');
    }
}

export default new OrderService

