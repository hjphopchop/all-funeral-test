import axios from "axios";

export const getToken = (user) => {
  axios(`http://135.181.35.61:2112/auth?user=${user}`, {
    method: "GET",
    withCredentials: false,
  })
    .then((res) => {
      console.log(res.status);
    })
    .catch((err) => {
      console.log(err.response);
    });
};
