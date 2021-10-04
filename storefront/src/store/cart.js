const initialState = [];

export default function cartReducer(state = initialState, action) {
  const { type, payload } = action;

  //   console.log(payload);

  switch (type) {
    case "ADDTOCART":
      if (payload.count !== 0) {
        return [...state, payload];
      } else {
        return state;
      }
    default:
      return state;
  }
}

export function addToCart(product) {
  //   console.log(product);
  return {
    type: "ADDTOCART",
    payload: product,
  };
}
