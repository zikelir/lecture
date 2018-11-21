export const baseUrl = 'http://localhost:3001';
// export const baseUrl = 'https://omaia-blog-server.herokuapp.com';

export const getHeader = {
  method: "get",
  headers: {
    "Content-Type": "application/json",
    'Authorization': 'foo'
  },
  credentials: "same-origin"
};
