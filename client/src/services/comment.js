import { baseUrl } from "./config";

export const updateCommentApi = async (comment, actionType) => {
  try {
    const apiResponse = await fetch(`${baseUrl}/comments/${comment.id}`, {
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

export const deleteCommentApi = async (comment) => {
  try {
    const apiResponse = await fetch(`${baseUrl}/comments/${comment.id}`, {
      method: "DELETE",
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

export const putCommentApi = async (editedComment) => {
  try {
    const apiResponse = await fetch(`${baseUrl}/comments/${editedComment.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'foo',
      },
      credentials: "same-origin",
      body: JSON.stringify(
        editedComment
      )
    });
    const returnedResponse = await apiResponse.json();
    return returnedResponse;
  } catch (e) {
    console.log(e);
  }
};
