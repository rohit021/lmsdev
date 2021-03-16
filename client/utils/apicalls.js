import axios from "axios";
import Cookies from 'js-cookies'
// https://formbackend11.herokuapp.com";

const config = {
  header: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
};

const login = (email, password) => {
  return axios
    .post("/api/auth/login", {
      email,
      password,
    },config)
    .then((response) => {
      if (response.data) {

        Cookies.set('token',access_token,{expires:1});
        Cookies.set('user',userSessionData,{expires:1})
        // localStorage.setItem("authUser", JSON.stringify(response.data.user));
        // localStorage.setItem("authToken", JSON.stringify(response.data.token));
      }  
      return response.data;
    });
};

const register = (username, email, password) => {
  return axios
    .post("/api/auth/register", {
        username,
        email,
        password,
      },
      config)
    .then((response) => {
      if (response.data) {
        Cookies.set('token',access_token,{expires:1});
        Cookies.set('user',userSessionData,{expires:1})
        // localStorage.setItem("authUser", JSON.stringify(response.data.user));
        // localStorage.setItem("authToken", JSON.stringify(response.data.token));
      }  
      return response.data;
    });
};

// checking user is loggeg in
const isAuthenticated = () => {
  if (typeof window == "undefined") {
      return false;
  }
  if ( Cookies.get('token')) {
      return JSON.stringify(Cookies.get("user"));
  } else {
      return false;
  }
};
  
const signout = function (next) {
  if (typeof window !== "undefined") {
    Cookies.remove("token");
    Cookies.remove("user");

      // localStorage.removeItem("authToken");
      // localStorage.removeItem("authName");
      next();

      return fetch(`${API_URL}/auth/signout`, {
          method: "GET"
      })
          .then(response => console.log("signout success"))
          .catch(err => console.log(err));
  }
};







  export default {
    login,register,isAuthenticated, 
    signout
  }