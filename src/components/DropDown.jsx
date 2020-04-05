import React, { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

/* const DropDown = props => {
  function handleClick(event) {
    // Here, we invoke the callback with the new value
    console.log(event);
    props.onChange(true);
    <input value={props.value} onChange={handleChange(false)} />
  }
  return (
    <div>
      <Button onClick={props.changeTable} color="primary">
        Change Table
      </Button>
    </div>
  );
}; */

const DropDown = props => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  /* function handleClick(value) {
    props.changeTable(value);
  } */

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Dropdown</DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={props.changeTable}>TableOne</DropdownItem>
        <DropdownItem onClick={props.changeTableTwo}>TableTwo</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDown;
