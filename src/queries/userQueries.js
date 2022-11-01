import axios from "axios";
import { useMutation } from "react-query";
import { baseURL } from "../common/BaseUrl";

const signupUser = (user) => {
  return axios.post(baseURL + "auth/customer/signup", user);
};
const loginUser = (user) => {
  return axios.post(baseURL + "auth/customer/login", user);
};

export const useSignup = () => {
  return useMutation(signupUser, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error.response.data.error);
    },
  });
};

export const useLogin = () => {
  return useMutation(loginUser, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error.response.data.error);
    },
  });
};
