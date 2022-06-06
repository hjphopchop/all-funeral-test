import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://135.181.35.61:2112",
  }),
  endpoints: (build) => ({
    loginUser: build.query<any, any>({
      query: (user) => ({
        url: `/auth?user=${user}`,
      }),
    }),
  }),
});
