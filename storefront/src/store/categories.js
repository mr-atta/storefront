let initialState = {
  categories: [
    { normalName: "food", displayName: "FOOD", description: "Description " },
    {
      normalName: "electronics",
      displayName: "ELECTRONICS",
      description: "Description ",
    },
    {
      normalName: "phones",
      displayName: "PHONES",
      description: "Description ",
    },
    // { normalName: "", displayName: "", description: "" },
  ],
  activeCategory: {},
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "ACTIVATE":
      let actived = {};

      state.categories.map((ele, i) => {
        // console.log(ele);
        if (ele.displayName === payload) {
          actived = ele;
        }
      });

      return {
        categories: state.categories,
        activeCategory: actived,
      };

    default:
      return state;
  }
};

export const activeOne = (name) => {
  return {
    type: "ACTIVATE",
    payload: name,
  };
};
