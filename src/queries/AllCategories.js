import { useQuery } from "react-query";
import axios from "axios";
import { baseURL } from "../common/BaseUrl";

const fetchCategories = () => {
  return axios.get(baseURL + "category/en-US/get-categories");
};

export const AllCategories = (onSuccess, onError) => {
  return useQuery("categories", fetchCategories, {
    onSuccess,
    onError,
  });
};
