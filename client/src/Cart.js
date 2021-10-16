import React, { useEffect, useState } from "react";
import { ListGroup, Col, Image, Row } from "react-bootstrap";
import { Button } from "@material-ui/core";
import { CartState } from "./Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();

  const subTotal = cart.reduce(
    (acc, curr) => acc + Number(curr.price) * curr.qty,
    0
  );

  const [totalAmount, setTotalAmount] = useState(0);

  const shippingPrice = 8;
  function totalAmounts() {
    setTotalAmount(subTotal + shippingPrice);
    console.log(setTotalAmount(subTotal + shippingPrice));
    return setTotalAmount;
  }

  useEffect(() => {
    setTotalAmount(subTotal);
  }, [cart]);

  useEffect(() => {
    setTotal(subTotal.toFixed(2));
  }, [cart]);

  return (
    <div className="home">
      <div className="productContainer">
        <ListGroup>
          {cart.map((item1) => (
            <ListGroup.Item key={item1.id}>
              <Row>
                <Col md={2}>
                  <Image src={item1.img_src} alt={item1.name} fluid rounded />
                </Col>

                <Col md={2}>
                  <span>Title: {item1.title}</span>
                  <br />
                  <span>Artist: {item1.artist}</span>
                </Col>

                <Col md={2}>€ {item1.price}</Col>

                <Col md={2}>
                  <Form.Control
                    as="select"
                    value={item1.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: item1.id,
                          qty: e.target.value,
                        },
                      })
                    }
                  >
                    {[0, 1, 2, 3, 4, 5].map((x) => (
                      <option key={x + 1}>{x}</option>
                    ))}
                  </Form.Control>
                </Col>
                <Col md={2}>
                  <Button
                    type="button"
                    variant="light"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: item1,
                      })
                    }
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>

      <div className="filters summary">
        <h3>Order Summary</h3>
        <hr></hr>
        <span className="title">Item count: ({cart.length})</span>
        <br />
        <span>
          Subtotal <span className="Total">{subTotal.toFixed(2)}</span>
        </span>
        <br />
        <br />
        <span>
          Shipping<span> 8,00€</span>
        </span>
        <span> Berlin, Germany</span>
        <br />
        <br />

        <Form.Label className="my-1 mr-2" htmlFor="inlineFormCustomSelectPref">
          Select buying Method
        </Form.Label>
        <Form.Control
          onChange={totalAmounts}
          as="select"
          className="my-1 mr-sm-2"
          id="inlineFormCustomSelectPref"
          custom
        >
          <option>Pick up at the store</option>
          <option>Germany - 8,00€</option>
        </Form.Control>
        <hr></hr>
        <h2>
          Total {totalAmount === "0.00" ? subTotal : totalAmount.toFixed(2)}
          <span>Tax included</span>
        </h2>

        <br />
        <Button
          type="button"
          variant="contained"
          color="primary"
          disabled={cart.length === 0}
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
};

export default Cart;
