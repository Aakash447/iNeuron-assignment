import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./services/AuthServices";

const LoginSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_box {
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

const Login = () => {
  const [formData, setFormData] = useState({});
  let navigate = useNavigate();
  const handleLogin = () => {
    console.log("formData:", formData);
    loginUser(formData)
      .then((res) => {
        console.log("res:", res);
        navigate("/dashboard");
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
    <LoginSection>
      <div className="login_box">
        <header>
          <h2>Login</h2>
        </header>
        <main>
          <div className="form-control">
            <label>Email</label>
            <input type="email" name="email" onChange={handleChange} />
          </div>
          <div className="form-control">
            <label>Password</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>

          <div className="form-control btn-wrap">
            <button type="button" onClick={handleLogin}>
              Login
            </button>
            <Link to="/signup">Go to Signup page</Link>
          </div>
        </main>
      </div>
    </LoginSection>
  );
};

export default Login;
