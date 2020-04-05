import React /*,  { useState } */ from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_accions";
import {
  Navbar,
  Button,
  /* NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText */
} from "reactstrap";

const NavBar = (props) => {
  const dispatch = useDispatch();
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link to="/" className="mr-auto">
          Home
        </Link>
        <Button
          onClick={() => {
            dispatch(userActions.logout());
          }}
        >
          {" "}
          Logout
        </Button>
        <Link to="/login">Login</Link>
      </Navbar>
    </div>
  );
};

export default NavBar;
