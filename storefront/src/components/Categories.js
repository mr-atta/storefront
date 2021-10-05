import React, { useState } from "react";

import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";

import "./css/categories.css";

import { connect } from "react-redux";
import { activeOne } from "../store/categories";
import { selected } from "../store/products";

import Products from "./Products";

import { Card, Button } from "react-bootstrap";
import "./css/products.css";

import { defult } from "../store/products";

// console.log(defult);

const Categories = (props) => {
  // const { counter, activeOne, activeCategory } = props;

  // categories
  console.log(props.counter);
  console.log(props.counter.categories);
  console.log(props.counter.activeCategory);

  // products
  console.log(props.products);
  console.log(props.products.products);
  console.log(props.products.selectedProducts);

  // cart
  console.log(props.cart);

  // console.log(props.counter.activeCategory.displayName);

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
      <br />

      {/* add  defult productes to show them when visit the App  */}

      {typeof props.counter.activeCategory.displayName === "undefined" ? (
        // //////////////////////////////////////////////////////
        <div className="list">
          <ListGroup horizontal className="ListGroup">
            {" "}
            {defult.map((ele, i) => {
              return (
                <Card style={{ width: "18rem" }} className="Card" key={i}>
                  <Card.Img variant="top" src={ele.img} id="Card.Img" />
                  <Card.Body>
                    <Card.Title id="Card.Title">{ele.productName}</Card.Title>
                    <Card.Text id="Card.price">{ele.price}</Card.Text>
                    <Card.Text id="Card.description">
                      {ele.description}
                    </Card.Text>
                    {/* <Button variant="primary" id="Card.Button">
                      ❤
                    </Button> */}
                  </Card.Body>
                </Card>
              );
            })}
          </ListGroup>
        </div>
      ) : (
        // /////////////////////////////////////////////////////////////
        show && (
          <div id="listShown">
            <h2>{props.counter.activeCategory.displayName}</h2>
            <p>{props.counter.activeCategory.description}</p>

            <Products />
          </div>
        )
      )}
    </div>
  );
};

///////////////////////////////////////////////////////////////////

const mapStateToProps = (state) => ({
  // counter: {categories: {…}, products: {…}, cart: Array(0)}
  counter: state.categories,
  products: state.products,
  cart: state.cart,

  // activeCategory: state.activeCategory,   // >>>> undefined
});

const mapDispatchToProps = { activeOne, selected }; // ... + the prodectes

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
