import React, { useState } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";

import "./css/categories.css";

import { connect } from "react-redux";
import { activeOne } from "../store/categories";
import { selected } from "../store/products";

import Products from "./Products";

const Categories = (props) => {
  const { counter, activeOne } = props;

  console.log(props.counter.activeCategory.displayName);

  const [show, setShow] = useState(false);
  const handelListClick = (name) => {
    props.activeOne(name);
    setShow(true);
  };

  return (
    <div className="Categories">
      {/* <p>Browse our Categories</p> */}

      <section>
        <div className="list">
          <ListGroup horizontal className="oneCategorie">
            {" "}
            {props.counter.categories.map((ele, i) => {
              return (
                <ListGroup.Item
                  className="list-Item"
                  id={props.counter.activeCategory.displayName}
                  onClick={() => handelListClick(ele.displayName)}
                  key={i}
                >
                  | {ele.displayName}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
        </div>
      </section>
      {show && (
        <div id="listShown">
          <h2>{props.counter.activeCategory.displayName}</h2>
          <p>{props.counter.activeCategory.description}</p>

          <Products />
        </div>
      )}
    </div>
  );
};

///////////////////////////////////////////////////////////////////

const mapStateToProps = (state) => ({
  counter: state.categories,
});

const mapDispatchToProps = { activeOne, selected }; // ... + the prodectes

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
