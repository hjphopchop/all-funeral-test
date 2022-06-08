import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const companiesApi = createApi({
  reducerPath: "companiesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://135.181.35.61:2112",
  }),
  tagTypes:["Companies"],
  endpoints: (build) => ({
    getCompany: build.query<any, any>({
      query: (id) => ({
        url: `/companies/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWF4IiwiaWF0IjoxNjU0MzgxMTI2LCJleHAiOjE2NTQ5ODU5MjZ9.jVqiX-AFwk2tSenmKVGwZd0xbKWXckWf49WGdsni_1Y`,
        },
      }),
      providesTags: (result) => ["Companies"],
    }),
    updateCompany: build.mutation<any, any>({
      query: (company) => ({
        url: `/companies/12`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWF4IiwiaWF0IjoxNjU0MzgxMTI2LCJleHAiOjE2NTQ5ODU5MjZ9.jVqiX-AFwk2tSenmKVGwZd0xbKWXckWf49WGdsni_1Y`,
        },
        body: { ...company },
      }),
      invalidatesTags: ["Companies"],
    }),
    deleteCompany: build.mutation<any, any>({
      query: () => ({
        url: `/companies/12`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWF4IiwiaWF0IjoxNjU0MzgxMTI2LCJleHAiOjE2NTQ5ODU5MjZ9.jVqiX-AFwk2tSenmKVGwZd0xbKWXckWf49WGdsni_1Y`,
        },
      }),
      invalidatesTags: ["Companies"],
    }),
    addPhoto: build.mutation<any, any>({
      query: (img) => ({
        url: `/companies/12/image`,
        method: "POST",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWF4IiwiaWF0IjoxNjU0MzgxMTI2LCJleHAiOjE2NTQ5ODU5MjZ9.jVqiX-AFwk2tSenmKVGwZd0xbKWXckWf49WGdsni_1Y`,
         
          
        },
        body: img,
      }),
      invalidatesTags: ["Companies"],
    }),
  }),
});
