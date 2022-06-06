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

const getCompany = () => {
  axios("http://135.181.35.61:2112/companies/12", {
    method: "GET",
    withCredentials: false,
    headers: {
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWF4IiwiaWF0IjoxNjU0MzgxMTI2LCJleHAiOjE2NTQ5ODU5MjZ9.jVqiX-AFwk2tSenmKVGwZd0xbKWXckWf49WGdsni_1Y`,
    },
  })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err.response);
    });
};
