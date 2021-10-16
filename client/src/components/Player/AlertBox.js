import React from "react";
import { CartState } from "../../Context/Context";
import Button from "@material-ui/core/Button";

import "./AlertBox.css";

const AlertBox = () => {
  const { login, setLogin } = CartState();

  function playAgain() {
    setLogin(true);
    console.log("hello");
    return login;
  }
  return (
    <div>
      <div id="popup1" class="overlay">
        <div class="popup">
          <h2>Invalid !!!!</h2>

          <div class="content-1">Details did not match!!</div>
          <div class="content-2"></div>
          <Button id="play-again" onClick={playAgain}>
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AlertBox;
