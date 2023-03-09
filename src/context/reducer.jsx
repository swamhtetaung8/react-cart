const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };

    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };

    case "ADDED_TRUE":
      return {
        ...state,
        // products: [
        //   ...state.products,
        //   (state.products.find(
        //     (product) => product.id == action.payload
        //   ).added = true),
        // ],
        products: state.products.map((product) => {
          if (product.id == action.payload) {
            product.added = true;
          }
          return product;
        }),
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id == action.payload) {
            product.added = false;
          }
          return product;
        }),
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "INCREASE":
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.id == action.payload) {
            cartItem.quantity += 1;
            cartItem.price =
              state.products.find((item) => item.id == action.payload)
                .originalPrice * cartItem.quantity;
          }
          return cartItem;
        }),
      };
    case "DECREASE":
      return {
        ...state,
        cart: state.cart.map((cartItem) => {
          if (cartItem.quantity !== 1) {
            if (cartItem.id == action.payload) {
              cartItem.quantity -= 1;
              cartItem.price =
                state.products.find((item) => item.id == action.payload)
                  .originalPrice * cartItem.quantity;
            }
          }
          return cartItem;
        }),
      };
    case "CLEAR_CART":
      if (confirm("Are you sure?")) {
        return {
          ...state,
          products: state.products.map((product) => {
            product.added = false;
            product.price = product.originalPrice;
            product.quantity = 1;
            return product;
          }),
          cart: [],
        };
      } else {
        return { ...state };
      }

    default:
      return state;
  }
};

export default reducer;
