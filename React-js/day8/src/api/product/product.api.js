import { api } from "../api";

export const apiProductGetList = (number) => {
  return api.get(`/products?limit=${number}`);
};
export const apiProductGetDetail = (data) => {
  return api.get(`/products/${data}`);
};
