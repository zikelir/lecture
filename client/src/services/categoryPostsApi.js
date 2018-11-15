import { baseUrl, getHeader } from "./config";

export const fetchCategoryPostsApi = async () => {
  try {
    const path = window.location.pathname.replace('/','');
    const apiResponse = await fetch(`${baseUrl}/${path}/posts`, getHeader);
    const returnedResponse = await apiResponse.json();
    return returnedResponse;
  } catch (e) {
    console.log(e);
  }
};
