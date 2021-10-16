import React from "react";
import { Card } from "react-bootstrap";
import { CartState } from "../../../Context/Context";
import Music from "../Music";
import { Button, IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const SinglePop = ({ item }) => {
  const {
    state: { cart, favorite },
    dispatch,
    user1,
  } = CartState();

  if (item.genre === "Pop") {
    console.log(item.genre);
    return (
      <div className="products">
        <Card>
          <Card.Img
            variant="top"
            src={item.img_src}
            alt={item.artist}
            style={{ padding: "10px" }}
          />
          <Card.Body>
            <Music url={item.src} />
            <Card.Title className="artist">{item.artist}</Card.Title>
            <Card.Title>
              <h6 className="titleRecord">{item.title}</h6>
            </Card.Title>

            <Card.Subtitle style={{ paddingBottom: 10 }}>
              <p className="formatPrice">
                {item.format} | {item.price} €
              </p>
            </Card.Subtitle>
            {cart.some((p) => p.id === item.id) ? (
              <Button
                className="removeFromCart"
                color="secondary"
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: item,
                  });
                }}
              >
                REMOVE
              </Button>
            ) : (
              <Button
                className="addToCart"
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: item,
                  });
                }}
              >
                ADD TO CART
              </Button>
            )}
            {user1 && user1._id ? (
              <span
                style={{
                  position: "absolute",
                  right: 10,
                  bottom: 10,
                }}
              >
                {favorite.some((p) => p.id === item.id) ? (
                  <IconButton
                    className="removeFromCart"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FAVORITE",
                        payload: item,
                      });
                    }}
                    variant="danger"
                  >
                    <FavoriteIcon style={{ color: "red" }} />
                  </IconButton>
                ) : (
                  <IconButton
                    className="favorite"
                    onClick={() => {
                      dispatch({
                        type: "FAVORITE",
                        payload: { ...item, userId: user1._id },
                      });
                    }}
                  >
                    <FavoriteIcon />
                  </IconButton>
                )}
              </span>
            ) : (
              <OverlayTrigger
                overlay={
                  <Tooltip id="tooltip-disabled">Login to add favorite</Tooltip>
                }
              >
                <span
                  style={{
                    position: "absolute",
                    right: 20,
                    bottom: 22,
                  }}
                >
                  <FavoriteIcon />
                </span>
              </OverlayTrigger>
            )}
          </Card.Body>
        </Card>
      </div>
    );
  }
  return <div>{null}</div>;
};

export default SinglePop;
