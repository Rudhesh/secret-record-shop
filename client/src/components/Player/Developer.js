import React from "react";

import { IconButton } from "@material-ui/core";
// import AvatarImage from "../assets/img/avatar.jpg";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Portrait,
  Twitter,
} from "@material-ui/icons";
import { Table } from "react-bootstrap";

const Developer = () => {
  return (
    <div className="Developer">
      <div style={{ fontSize: "24px" }}>
        <Table size="lg">
          <thead>
            <tr>
              <th colSpan="4">
                <h3>Meet the developers</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Rudesh</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Kalaya</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Khushal</td>
            </tr>
            <tr>
              <td colSpan="4">
                {" "}
                <div className="Card-btn">
                  <IconButton
                    target={"_blank"}
                    href={"https://www.facebook.com/"}
                    title={""}
                  >
                    <Facebook />
                  </IconButton>
                  <IconButton
                    target={"_blank"}
                    href={"https://twitter.com/RDloves_miley"}
                    title={""}
                  >
                    <Twitter />
                  </IconButton>
                  <IconButton
                    target={"_blank"}
                    href={"https://www.linkedin.com/in/rudesh-dhote-a00a22208/"}
                    title={""}
                  >
                    <LinkedIn />
                  </IconButton>
                  <IconButton
                    target={"_blank"}
                    href={"https://www.instagram.com/rudhesh/"}
                    title={""}
                  >
                    <Instagram />
                  </IconButton>
                  <IconButton
                    target={"_blank"}
                    href={"https://competent-nightingale-686fa5.netlify.app/"}
                    title={"Web Portfolio"}
                  >
                    <Portrait />
                  </IconButton>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan="4">
                {" "}
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
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="DeveloperBox">
        {/* <div className="Developer-profileCard">
          <div className="Card-details">
            <h3>Hello, I´m Rudesh</h3>
            <h4>
              Full stack Web Developer with 4+ years of experience in Graphic
              Designer who will soon be graduating from a 1-year intensive
              training in Full Stack Web Development ( MERN stack ).
            </h4>
            <h3>Kalaya</h3>
            <h3>Khushal</h3>
          </div>
        </div> */}

        {/* <div className="Card-btn">
          <IconButton
            target={"_blank"}
            href={"https://www.facebook.com/"}
            title={""}
          >
            <Facebook />
          </IconButton>
          <IconButton
            target={"_blank"}
            href={"https://twitter.com/RDloves_miley"}
            title={""}
          >
            <Twitter />
          </IconButton>
          <IconButton
            target={"_blank"}
            href={"https://www.linkedin.com/in/rudesh-dhote-a00a22208/"}
            title={""}
          >
            <LinkedIn />
          </IconButton>
          <IconButton
            target={"_blank"}
            href={"https://www.instagram.com/rudhesh/"}
            title={""}
          >
            <Instagram />
          </IconButton>
          <IconButton
            target={"_blank"}
            href={"https://competent-nightingale-686fa5.netlify.app/"}
            title={"Web Portfolio"}
          >
            <Portrait />
          </IconButton>
        </div> */}
        <div className="Attribution">
          <div className="Attribution-div">
            {/* <div className="Attribution-text">
              Icons made by
              <a href="https://www.facebook.com/rudhesh" title="Freepik">
                &nbsp;Freepik&nbsp;
              </a>
              from
              <a href="https://www.flaticon.com/" title="Flaticon">
                &nbsp;www.flaticon.com
              </a>
            </div> */}
            {/* <div className="Attribution-text">
              Music by
              <a href="https://ncs.io/" title="NCS">
                &nbsp;NCS&nbsp;
              </a>
              from
              <a href="https://ncs.io/music" title="NCS">
                &nbsp;ncs.io/music
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
