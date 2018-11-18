import { baseUrl } from "./config";

export const updatePostApi = async (post, actionType) => {
  try {
    const apiResponse = await fetch(`${baseUrl}/posts/${post.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'foo',
      },
      credentials: "same-origin",
      body: JSON.stringify({
        'option': actionType,
      })
    });
    const returnedResponse = await apiResponse.json();
    return returnedResponse;
  } catch (e) {
    console.log(e);
  }
};

export const addPostApi = async (post) => {
  try {
    const apiResponse = await fetch(`${baseUrl}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'foo',
      },
      credentials: "same-origin",
      body: JSON.stringify(
        post
      )
    });
    const returnedResponse = await apiResponse.json();
    return returnedResponse;
  } catch (e) {
    console.log(e);
  }
};

export const deletePostApi = async (post) => {
  try {
    const apiResponse = await fetch(`${baseUrl}/posts/${post.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'foo',
      },
      credentials: "same-origin",
      body: JSON.stringify(
        post
      )
    });
    const returnedResponse = await apiResponse.json();
    return returnedResponse;
  } catch (e) {
    console.log(e);
  }
};

export const putPostApi = async (editedPost) => {
  try {
    const apiResponse = await fetch(`${baseUrl}/posts/${editedPost.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'foo',
      },
      credentials: "same-origin",
      body: JSON.stringify(
        editedPost
      )
    });
    const returnedResponse = await apiResponse.json();
    return returnedResponse;
  } catch (e) {
    console.log(e);
  }
};
