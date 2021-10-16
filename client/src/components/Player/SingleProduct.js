import React, { useEffect } from "react";
import { Button, IconButton } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Card } from "react-bootstrap";
import { Overlay, OverlayTrigger, Tooltip } from "react-bootstrap";

import { CartState } from "../../Context/Context";
import Music from "./Music";

const LOCAL_STORAGE_KEY = "songList";

const SingleProduct = ({ item }) => {
  const {
    state: { cart, favorite },
    dispatch,
    styling,

    user1,
  } = CartState();

  useEffect(() => {
    const song = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (song) {
      dispatch(song);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorite));
  }, [favorite]);

  return (
    <div className="products">
      <Card>
        <div className={styling === "dark" ? "imageRecordDark" : ""}>
          <Card.Img
            variant="top"
            src={item.img_src}
            alt={item.artist}
            style={{ padding: "10px" }}
          />
        </div>
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
};

export default SingleProduct;
