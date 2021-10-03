import { connect } from "react-redux";
import { selected } from "../store/products";

import ListGroup from "react-bootstrap/ListGroup";
import "bootstrap/dist/css/bootstrap.min.css";

const Products = (props) => {
  console.log(props);

  return (
    <div className="Products">
      Products:
      <div className="list">
        <ListGroup horizontal className="oneCategorie">
          {" "}
          {props.counter.products.map((ele, i) => {
            return (
              <ListGroup.Item
                className="list-Item"
                id={props.counter.products.productName}
                key={i}
              >
                {ele.productName}
              </ListGroup.Item>
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
