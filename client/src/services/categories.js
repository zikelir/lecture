import { baseUrl, getHeader } from "./config";

export const fetchCategories = async () => {
  const apiResponse = await fetch(`${baseUrl}/categories`, getHeader);
  const returnedResponse = await apiResponse.json();
  return returnedResponse;
};

export const fetchCategories = async (category) => {
  const apiResponse = await fetch(`${baseUrl}:${category}/posts`, getHeader);
  const returnedResponse = await apiResponse.json();
  return returnedResponse;
};
