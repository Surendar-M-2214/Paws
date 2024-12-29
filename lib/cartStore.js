import { create } from "zustand";
import { persist } from "zustand/middleware";
const useCartStore = create( persist(
    (set) => ({
  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find(
        (item) => item.id === product.id && item.size === product.size
      );

      if (existingItem) {
        // Update quantity if the same product with the same size exists
        return {
          cart: state.cart.map((item) =>
            item.id === product.id && item.size === product.size
              ? { ...item, quantity: item.quantity + product.quantity }
              : item
          ),
        };
      }

      // Add new product to the cart
      return { cart: [...state.cart, product] };
    }),
  removeFromCart: (productId, size) =>
    set((state) => ({
      cart: state.cart.filter(
        (item) => item.id !== productId || item.size !== size
      ),
    })),
  clearCart: () => set({ cart: [] }),
}),{
    name: "cart-storage",
}));

export default useCartStore;
