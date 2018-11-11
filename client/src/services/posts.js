import { baseUrl, getHeader } from "./config";

export const fetchAllPostsApi = async () => {
  try {
    const apiResponse = await fetch(`${baseUrl}/posts`, getHeader);
    const returnedResponse = await apiResponse.json();
    return returnedResponse;
  } catch (e) {
    console.log(e);
  }
};
