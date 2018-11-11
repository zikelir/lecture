import { baseUrl, getHeader } from "./config";

export const fetchCategoriesApi = async () => {
  try {
    const apiResponse = await fetch(`${baseUrl}/categories`, getHeader);
    const returnedResponse = await apiResponse.json();
    return returnedResponse;
  } catch (e) {
    console.log(e);
  }
};

