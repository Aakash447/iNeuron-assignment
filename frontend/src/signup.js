import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addUser } from "./services/AuthServices";

const SignupSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .signup_box {
    padding: 1rem;
    border: solid 1px blue;
    width: 500px;
    height: 450px;
  }
  header {
    margin-top: 1rem;
    text-align: center;
  }
  main {
    div.form-control {
      margin: 1.25rem 0;
      display: flex;
      flex-direction: column;
      label {
        margin-bottom: 5px;
      }
      input {
        height: 25px;
        border-radius: 4px;
      }

      button {
        margin-top: 1rem;
        width: 100px;
        margin: 0 auto;
        padding: 5px;
        border-radius: 4px;
        cursor: pointer;
      }
    }
    .btn-wrap {
      margin-top: 2rem;
    }
  }
`;

const Signup = () => {
  const [formData, setFormData] = useState({});
  let navigate = useNavigate();
  const handleSignup = () => {
    console.log("formData:", formData);
    addUser(formData)
      .then((res) => {
        console.log("res:", res);
        navigate("/signin");
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <SignupSection>
      <div className="signup_box">
        <header>
          <h2>Signup</h2>
        </header>
        <main>
          <div className="form-control">
            <label>First Name</label>
            <input type="text" name="firstName" onChange={handleChange} />
          </div>
          <div className="form-control">
            <label>Last Name</label>
            <input type="text" name="lastName" onChange={handleChange} />
          </div>
          <div className="form-control">
            <label>Email</label>
            <input type="email" name="email" onChange={handleChange} />
          </div>
          <div className="form-control">
            <label>Password</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>

          <div className="form-control btn-wrap">
            <button type="button" onClick={handleSignup}>
              Signup
            </button>
          </div>
          <Link to="/signin">Go to Signin page</Link>
        </main>
      </div>
    </SignupSection>
  );
};

export default Signup;
