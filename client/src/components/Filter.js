import { Offcanvas, Form } from "react-bootstrap";
import { CartState } from "../Context/Context";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faHamburger } from "@fortawesome/free-solid-svg-icons";

const Filter = () => {
  const {
    productState: { sort },
    productDispatch,
    show,
    setShow,
  } = CartState();

  console.log(sort);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="filter">
      <>
        <Button variant="outline dark" onClick={handleShow}>
          <FontAwesomeIcon icon={faBars} />{" "}
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              {" "}
              <span className="title"> Filter Products</span>
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="content">
            <Offcanvas.Title> Sort by price</Offcanvas.Title>
            <br />

            <span>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={() =>
                      productDispatch({
                        type: "SORT_BY_PRICE",
                        payload: "lowToHigh",
                      })
                    }
                    checked={sort === "lowToHigh" ? true : false}
                  />
                }
                label="Low to High"
                labelPlacement="end"
              />
            </span>
            <span>
              <FormControlLabel
                control={
                  <Checkbox
                    inline
                    onChange={() =>
                      productDispatch({
                        type: "SORT_BY_PRICE",
                        payload: "highToLow",
                      })
                    }
                    checked={sort === "highToLow" ? true : false}
                  />
                }
                label="High to low"
                labelPlacement="end"
              />
            </span>
            <hr />
            <Button
              variant="light"
              onClick={() =>
                productDispatch({
                  type: "CLEAR_FILTERS",
                })
              }
            >
              Clear Filters
            </Button>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </div>
  );
};

export default Filter;
