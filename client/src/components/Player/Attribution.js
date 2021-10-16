import React from "react";
import "./Attribution.css";

const Attribution = () => {
  return (
    <div className="Attribution">
      <h3>Attribution</h3>
      <div className="Attribution-div">
        <div className="Attribution-text">
          Icons made by
          <a href="http://www.freepik.com/" title="Freepik">
            &nbsp;Freepik&nbsp;
          </a>
          from
          <a href="https://www.flaticon.com/" title="Flaticon">
            &nbsp;www.flaticon.com
          </a>
        </div>
        <div className="Attribution-text">
          Music by
          <a href="https://ncs.io/" title="NCS">
            &nbsp;NCS&nbsp;
          </a>
          from
          <a href="https://ncs.io/music" title="NCS">
            &nbsp;ncs.io/music
          </a>
        </div>
      </div>
    </div>
  );
};

export default Attribution;
