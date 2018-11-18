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

export const getPostByDetailApi = async (id) => {
  try {
    const apiResponse = await fetch(`${baseUrl}/posts/${id}`, getHeader);
    const returnedResponse = await apiResponse.json();
    return returnedResponse;
  } catch (e) {
    console.log(e);
  }
};

export const getPostCommentsApi = async (id) => {
  try {
    const apiResponse = await fetch(`${baseUrl}/posts/${id}/comments`, getHeader);
    const returnedResponse = await apiResponse.json();
    return returnedResponse;
  } catch (e) {
    console.log(e);
  }
};