import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Company } from "../types/company";

export const companiesApi = createApi({
  reducerPath: "companiesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://135.181.35.61:2112",
  }),
  tagTypes: ["Companies"],
  endpoints: (build) => ({
    getCompany: build.query<Company, unknown>({
      query: (id) => ({
        url: `/companies/${id}`,
        method: "GET",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWF4IiwiaWF0IjoxNjU0MzgxMTI2LCJleHAiOjE2NTQ5ODU5MjZ9.jVqiX-AFwk2tSenmKVGwZd0xbKWXckWf49WGdsni_1Y`,
        },
      }),
      providesTags: (result) => ["Companies"],
    }),
    updateCompany: build.mutation<Company, any>({
      query: ({company,id}) => ({
        url: `/companies/${id}`,
        method: "PATCH",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWF4IiwiaWF0IjoxNjU0MzgxMTI2LCJleHAiOjE2NTQ5ODU5MjZ9.jVqiX-AFwk2tSenmKVGwZd0xbKWXckWf49WGdsni_1Y`,
        },
        body: { ...company },
      }),
      invalidatesTags: ["Companies"],
    }),
    deleteCompany: build.mutation<Company, string>({
      query: () => ({
        url: `/companies/12`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibWF4IiwiaWF0IjoxNjU0MzgxMTI2LCJleHAiOjE2NTQ5ODU5MjZ9.jVqiX-AFwk2tSenmKVGwZd0xbKWXckWf49WGdsni_1Y`,
        },
      }),
      
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
