import { baseUrl } from "./config";

// export const updatePostApi = async (post, actionType) => {
//   try {
//     const apiResponse = await fetch(`${baseUrl}/posts/${post.id}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         'Authorization': 'foo',
//       },
//       credentials: "same-origin",
//       body: JSON.stringify({
//         'option': actionType,
//       })
//     });
//     const returnedResponse = await apiResponse.json();
//     return returnedResponse;
//   } catch (e) {
//     console.log(e);
//   }
// };

export const addCommentApi = async (comment) => {
  try {
    const apiResponse = await fetch(`${baseUrl}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'foo',
      },
      credentials: "same-origin",
      body: JSON.stringify(
        comment
      )
    });
    const returnedResponse = await apiResponse.json();
    return returnedResponse;
  } catch (e) {
    console.log(e);
  }
};

