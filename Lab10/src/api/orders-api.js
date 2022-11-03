import axios from "axios";

const axiosInstance = axios.create({
  badeURL: "http://127.0.0.1:5050/orders",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const getAllOrders = async () => {
  try {
    const response = await axios.get("http://localhost:5050/orders");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getById = async (id) => {
  try {
    const response = await axios.get(`http://127.0.0.1:5000/get-bank/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getByFilters = async (filters) => {
  try {
    const response = await axios.get(`http://127.0.0.1:5000/filter/${filters}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
