let initialState = {
  products: [
    {
      productName: "burger",
      description: "Description",
      price: "5$",
      category: "FOOD",
      img: "https://assets.bonappetit.com/photos/5d1cb1880813410008e914fc/3:2/w_1997,h_1331,c_limit/Print-Summer-Smash-Burger.jpg",
      count: 1,
    },
    {
      productName: "mansaf",
      description: "Description",
      price: "2$",
      category: "FOOD",
      img: "https://pbs.twimg.com/media/Ec0VN3gXYAIllGt.jpg",
      count: 1,
    },
    {
      productName: "iphone 12",
      description: "Description",
      price: "800$",
      category: "PHONES",
      img: "https://3geeksgadgets.com/wp-content/uploads/2021/06/iphone12prp.jpeg",
      count: 1,
    },
    {
      productName: "iphone 11 pro",
      description: "Description",
      price: "700$",
      category: "PHONES",
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-iphone-11-pro-gold-2019?wid=1144&hei=1144&fmt=jpeg&qlt=80&.v=1611101491000",
      count: 1,
    },

    // { normalName: "", displayName: "", description: "" },
  ],
  selectedProducts: {},
};

export default (state = initialState, action) => {
  let { type, payload } = action;
  // payload >>> selected category
  // console.log(action);

  switch (type) {
    case "ACTIVATE":
      let selected = [];

      state.products.map((ele, i) => {
        console.log({ ele });
        if (ele.category == payload) {
          selected.push(ele);
        }
      });

      console.log(selected);

      return {
        products: state.products,
        selectedProducts: selected,
      };

    case "DECREASE_COUNT":
      const afterAdd = state.products.map((element) => {
        if (element.productName == payload.productName && element.count > 0) {
          element.count = element.count - 1;
        } else if (element.count === 0) {
          element.description = "Out of Stock";
        }
        return element;
      });
      return {
        products: afterAdd,
        selectedProducts: state.selectedProducts,
      };

    default:
      return state;
  }
};

export const selected = (name) => {
  return {
    type: "ACTIVATE",
    payload: name,
  };
};

export const reduceCount = (product) => {
  return {
    type: "DECREASE_COUNT",
    payload: product,
  };
};

export const defult = initialState.products;
