import { baseUrl } from "./config";

export const updatePostApi = async (post) => {
  console.log(post, 'API POST');
  try {
    const apiResponse = await fetch(`${baseUrl}/posts/${post.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'foo',
      },
      credentials: "same-origin",
      body: JSON.stringify({
        'option': 'upVote',
      })
    });
    const returnedResponse = await apiResponse.json();
    return returnedResponse;
  } catch (e) {
    console.log(e);
  }
};
