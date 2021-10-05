import React from "react";
import { connect } from "react-redux";
import { Typography, List, Card } from "@material-ui/core";

function Cart(props) {
  console.log(props.cart);

  if (props.cart.length == 0) {
    return "its empty";
  } else {
    return (
      <>
        <List>
          <Card
            style={{
              background: "#c7c5c5",
              width: "100px",
              right: "50%",
              marginLeft: "5px",
              textAlign: "center",
            }}
          >
            {props.cart.map((ele, i) => {
              return (
                <div key={i}>
                  <Typography>{ele.productName} </Typography>
                </div>
              );
            })}
          </Card>
        </List>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedProducts: state.products.selectedProducts,
  cart: state.cart,
});

const mapDispatch = {};
export default connect(mapStateToProps, mapDispatch)(Cart);
