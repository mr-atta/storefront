let initialState = {
  products: [
    {
      productName: "burger",
      description: "Description",
      price: "5$",
      category: "FOOD",
    },
    {
      productName: "mansaf-kasa",
      description: "Description",
      price: "2$",
      category: "FOOD",
    },

    // { normalName: "", displayName: "", description: "" },
  ],
  selectedProducts: {},
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "SELECTE":
      let selected = {};

      state.products.map((ele, i) => {
        console.log(ele);
        if (ele.productName === payload) {
          selected = ele;
        }
      });

      return {
        products: state.products,
        selectedProducts: selected,
      };

    default:
      return state;
  }
};

export const selected = (name) => {
  return {
    type: "SELECTE",
    payload: name,
  };
};
