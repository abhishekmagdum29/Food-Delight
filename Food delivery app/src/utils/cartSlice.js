import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },

  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item?.card?.info?.id === action.payload?.card?.info?.id
      );

      if (itemIndex >= 0) {
        state.items[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.items.push(tempProduct);
      }
    },

    decreaseCartItems: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item?.card?.info?.id === action.payload?.card?.info?.id
      );

      if (state.items[itemIndex].cartQuantity > 1) {
        state.items[itemIndex].cartQuantity += -1;
      } else if (state.items[itemIndex].cartQuantity === 1) {
        const newCartItems = state.items.filter(
          (item) => item?.card?.info?.id !== action.payload?.card?.info?.id
        );
        state.items = newCartItems;
      }
    },

    clearItem: (state) => {
      state.items = [];
    },

    getTotal: (state) => {
      let { total, quantity } = state.items.reduce(
        (cartTotal, item) => {
          let { price, defaultPrice } = item?.card?.info;
          const itemTotal =
            Math.floor(price / 100 || defaultPrice / 100) * item?.cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += item?.cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    },
  },
});

export default cartSlice.reducer;

export const { addItem, decreaseCartItems, clearItem, getTotal } =
  cartSlice.actions;
