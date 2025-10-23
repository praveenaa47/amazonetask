import axios from "axios";
import { commonApi } from "./commonApi";
import { BASE_URL } from "./baseurl";

export const getProducts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/produts`, {});
    return response.data;
  } catch (error) {
    console.error("failed to get products");
    throw error;
  }
};


export const getProductsbyId = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/product/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to get product by ID:", error);
    throw error;
  }
};

