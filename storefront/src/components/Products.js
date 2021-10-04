import { connect } from "react-redux";
import { selected } from "../store/products";

import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import "./css/products.css";

const Products = (props) => {
  console.log(props.counter.selectedProducts);

  // const { counter, selected } = props;

  return (
    <div className="Products">
      Products:
      <div className="list">
        <ListGroup horizontal className="ListGroup">
          {" "}
          {props.counter.selectedProducts.map((ele, i) => {
            return (
              <Card style={{ width: "18rem" }} className="Card" key={i}>
                <Card.Img variant="top" src={ele.img} id="Card.Img" />
                <Card.Body>
                  <Card.Title id="Card.Title">{ele.productName}</Card.Title>
                  <Card.Text id="Card.price">{ele.price}</Card.Text>
                  <Card.Text id="Card.description">{ele.description}</Card.Text>
                  <Button variant="primary" id="Card.Button">
                    ❤
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </ListGroup>
      </div>
    </div>
  );
};

///////////////////////////////////////////////////////////////////

const mapStateToProps = (state) => ({
  counter: state.products,
});

const mapDispatchToProps = { selected };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
