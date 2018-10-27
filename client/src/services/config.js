export const baseUrl = 'http://localhost:3001';

export const getHeader = {
  method: "get",
  headers: {
    "Content-Type": "application/json",
    'Authorization': 'foo'
  },
  credentials: "same-origin"
};
