import httpClient from "../libs/axios";

export const getProducts = async () => {
  const response = await httpClient.get("/products");
  return response.data;
};

export const deleteProduct = async (productId) => {
  const response = await httpClient.delete(`/products/${productId}`);
  return response.data;
};
export const createProduct = async (body) => {
  const response = await httpClient.post(`/products`, body);
  return response.data;
};
