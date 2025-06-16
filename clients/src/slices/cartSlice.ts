// import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

// interface Pet {
//   _id: string;
//   name: string;
//   breed: string;
//   image: string;
//   price: number;
// }

// interface CartState {
//   items: Pet[];
// }

// const initialState: CartState = {
//   items: [],
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addItem: (state, action: PayloadAction<Pet>) => {
//       state.items.push(action.payload);
//     },
//     removeItem: (state, action: PayloadAction<string>) => {
//       state.items = state.items.filter(item => item._id !== action.payload);
//     },
//     clearCart: state => {
//       state.items = [];
//     },
//   },
// });

// export const { addItem, removeItem, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface Pet {
  _id: string;
  name: string;
  breed: string;
  image: string;
  price: number;
}

interface CartState {
  items: Pet[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Pet>) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item._id !== action.payload);
    },
    clearCart: state => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;