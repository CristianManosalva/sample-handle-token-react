import React, { useState } from "react";
//to use store, useDispatch to execj accions, useSelector to get state values
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_accions";
//import useLocalStorage from "../hooks/useLocalStorage";
//import axios from "axios";

import {
  Container,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
} from "reactstrap";

function Login(props) {
  const [inputs, setInputs] = useState({
    email: "rubunu@gmail.com",
    password: "cortana",
  });
  const [submitted, setSubmitted] = useState(false);
  const { email, password } = inputs;
  //to show a load item while make login functions, get value from state
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const dispatch = useDispatch();
  // eslint-disable-next-line
  //const [xs, setXs] = useLocalStorage("xs", "");

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  /* function makeLogin() {
    const options = {
      url: "/login",
      method: "POST",
      data: {
        email: email,
        password: password,
      },
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    };
    axios(options).then(
      (response) => {
        const { access_token } = response.data;
        setXs(access_token.token);
      },
      (error) => {
        try {
          const { data } = error.response;
          alert(data);
        } catch (error) {}
      }
    );
  } */

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(userActions.login(email, password));
  }

  return (
    <Container>
      <Row>
        <Col sm={{ size: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Col sm={{ size: 10, offset: 1 }} style={{ textAlign: "start" }}>
                <Label for="email">Email</Label>
                <Input
                  autoFocus
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@host.com"
                  value={email}
                  onChange={handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={{ size: 10, offset: 1 }} style={{ textAlign: "start" }}>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="password"
                  value={password}
                  onChange={handleChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col sm={{ size: 10, offset: 1 }}>
                <Button disabled={!validateForm()}>Login</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export { Login };
