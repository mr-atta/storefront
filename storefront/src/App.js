import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./components/Categories";

import Cart from "./components/Cart";
import { useState } from "react";

function App() {
  const [showCartList, setshowCartList] = useState(false);

  function show() {
    setshowCartList(!showCartList);
  }

  return (
    <div className="App">
      <Header show={show} />
      {showCartList && <Cart />}

      <Categories />
      {/* <Products /> */}

      <Footer />
    </div>
  );
}

export default App;

// return (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );
