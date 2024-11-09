import axios from "axios";
const API_URL = "https://localhost/api/auth";
class AuthService{
    login (username,password){
        return axios
            .post(API_URL+"signin",{username,password})
            .then((response) =>{
                if (response.data.accessToken){
                    localStorage.setItem("user",JSON.stringify(response.data));
                }
                return response.data;
            })
    }

    logout(){
        localStorage.removeItem("user");
    }
}

export defualt new AuthService();