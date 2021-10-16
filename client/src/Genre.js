import React from "react";
import SingleProduct from "./components/Player/SingleProduct";
import { CartState } from "./Context/Context";
import {
  BrowserRouter,
  Link,
  useRouteMatch,
  Switch,
  Route,
} from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import Pop from "./components/Player/genre/Pop";
import Jazz from "./components/Player/genre/Jazz";
import Rock from "./components/Player/genre/Rock";
import Hiphop from "./components/Player/genre/Hiphop";
import "./genre.css";
const Genre = () => {
  const {
    state: { songs },
  } = CartState();

  const { url, path } = useRouteMatch();
  console.log("hello", url);
  return (
    <BrowserRouter>
      <div>
        <Navbar bg="light" variant="light">
          <Nav className="links">
            <Link to={`${url}`}>POP</Link>
            <Link to={`${url}/jazz`}>JAZZ</Link>{" "}
            <Link to={`${url}/rock`}>ROCK</Link>{" "}
            <Link to={`${url}/hiphop`}>HIPHOP</Link>{" "}
          </Nav>
        </Navbar>

        <Switch>
          <Route exact path={`${path}`} component={Pop} />
          <Route exact path={`${path}/jazz`} component={Jazz} />
          <Route exact path={`${path}/rock`} component={Rock} />
          <Route exact path={`${path}/hiphop`} component={Hiphop} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Genre;
