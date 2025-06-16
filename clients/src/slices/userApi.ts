import { apiSlice } from "./api";

interface loginInput {
  email: string;
  password: string;
}

interface registerInput extends loginInput {
  username: string;
}

interface petCreateInput {
  name: string;
  age: number;
  breed: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data: loginInput) => ({
        url: "login",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "logout",
        method: "DELETE",
        credentials: "include",
      }),
    }),
    register: builder.mutation({
      query: (data: registerInput) => ({
        url: "register",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    petCreate: builder.mutation({
      query: (data: petCreateInput) => ({
        url: "petCreate",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    getPetData: builder.query<petCreateInput[], void>({
      query: (data) => ({
        url: "getPets",
        method: "Get",
        body: data,
        credentials: "include",
      }),
    }),
    placeOrder: builder.mutation({
      query: (orderData) => ({
        url: "/order",
        method: "POST",
        body: orderData,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  usePetCreateMutation,
  useGetPetDataQuery,usePlaceOrderMutation
} = userApiSlice;
