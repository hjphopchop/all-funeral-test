import axios from "axios";

axios('http://135.181.35.61:2112/auth?user=max', {
    method: 'GET',
    withCredentials: false,
    headers: {
      'authorization': `Bearer token`
    }
  }).then(res => {
       console.log(res.data)
     }).catch(err => {
       console.log(err.response);
     })

axios('http://135.181.35.61:2112/companies/12', {
    method: 'GET',
    withCredentials: false,
    headers: {
      'authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWF4IiwiaWF0IjoxNjU0MzgxMTI2LCJleHAiOjE2NTQ5ODU5MjZ9.jVqiX-AFwk2tSenmKVGwZd0xbKWXckWf49WGdsni_1Y`
    }
  }).then(res => {
       console.log(res.data)
     }).catch(err => {
       console.log(err.response);
     })
