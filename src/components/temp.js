import React, { useState } from "react";

import { Button, Form } from "semantic-ui-react";
import { Container } from "semantic-ui-react";

const RegForm = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    gender: [],
    conpassword: "",
  });
  const handleInputChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  return (
    <Container style={{ margin: 20 }}>
      <Form class="ui form" onSubmit={handleSubmit}>
        <h4 class="ui dividing header">Registration form Hooks </h4>
        <div class="field">
          <div class="two fields">
            <div class="field">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={state.firstName}
                placeholder="First Name"
                onChange={handleInputChange}
              />
            </div>
            <div class="field">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={state.lastName}
                placeholder="Last Name"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>

        <div class="two fields">
          <div class="field">
            <label>Gender</label>
            <input
              type="radio"
              id="gender"
              name="gender"
              value={state.gender}
              onChange={handleInputChange}
            />
            Male
            <input
              type="radio"
              id="gender"
              name="gender"
              value={state.gender}
              onChange={handleInputChange}
            />
            FeMale
          </div>

          <div class="field">
            <label>Phone Number</label>
            <input
              type="number"
              name="phone"
              id="phone"
              value={state.phone}
              placeholder="Phone Number"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div class="two fields">
          <div class="field">
            <label>Country</label>
            <select class="ui fluid dropdown">
              <option value="">Select Country</option>
              <option value="AL">India</option>
              <option value="AK">Singapoore</option>
              <option value="AZ">Nepal</option>
              <option value="AR">United State</option>
            </select>
          </div>
          <div class="field">
            <label>Enter Email Address </label>
            <input
              type="email"
              name="email"
              id="email"
              value={state.email}
              placeholder="Phone Number"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div class="two fields">
          <div class="field">
            <label>DOB</label>
            <input
              type="date"
              dateFormat="DD/MM/YYYY"
              label="Date of birth"
              name="date"
              id="date"
              value={state.date}
              placeholder="select your DOB"
              onChange={handleInputChange}
            />
          </div>
          <div class="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={state.password}
              placeholder="Enter Password"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div class="two fields">
          <div class="field">
            <label>Confirm Password</label>
            <input
              type="password"
              name="conpassword"
              id="conpassword"
              placeholder="Enter Confirm Password"
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div class="ui button" tabindex="0">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </Container>
  );
};

export default RegForm;
