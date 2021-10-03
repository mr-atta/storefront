import { combineReducers, createStore } from "redux";
import categories from "./categories";
import products from "./products";

import { composeWithDevTools } from "redux-devtools-extension";

let reducers = combineReducers({ categories: categories, products: products });

// console.log(categories);
// console.log(products);

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
