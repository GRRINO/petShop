import { create } from 'zustand';

// Define the Pet type (customize as needed)
export interface Pet {
  _id: string;
  name: string;
  price: number;
  age: string;
  breed: string;
  gender: string;
  description: string;
  image: string;
  category?: string;
}

// Define the shape of the cart store
interface CartStore {
  items: Pet[];
  addItem: (pet: Pet) => void;
  removeItem: (petId: string) => void;
  clearCart: () => void;
}

const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (pet) =>
    set((state) => ({
      items: state.items.find((item) => item._id === pet._id)
        ? state.items
        : [...state.items, pet],
    })),
  removeItem: (petId) =>
    set((state) => ({
      items: state.items.filter((item) => item._id !== petId),
    })),
  clearCart: () => set({ items: [] }),
}));

export default useCartStore;
