import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://petshop-c875.onrender.com' }),
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:7000/' }),
  endpoints: () => ({})
})