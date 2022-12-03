import Login from "./login";
import styled from "styled-components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Signup from "./signup";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/signin" element={<Login />}></Route>
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
