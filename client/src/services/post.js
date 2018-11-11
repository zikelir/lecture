import { baseUrl } from "./config";

export const updatePostApi = async (post) => {
  try {
    const apiResponse = await fetch(`${baseUrl}/posts/${post.id}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'foo'
      },
      credentials: "same-origin",
      body: JSON.stringify({post}),
    });
    const returnedResponse = await apiResponse.json();
    return returnedResponse;
  } catch (e) {
    console.log(e);
  }
};
