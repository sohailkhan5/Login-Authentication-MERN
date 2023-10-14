import { Button, TextField } from "@mui/material";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "success") {
          navigate("/home");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="LoginPage">
      <div className="LoginCard">
        <div className="LoginContent">
          <div className="header">
            <h1>Welcome to Crypto App</h1>
            <p>Enter your credentials to access the account.</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="LoginField">
              <TextField
                label="Email"
                sx={{
                  width: "100%",
                  "& .MuiInputBase-root": {
                    height: "60px",
                  },
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                type="password"
                label="Password"
                sx={{
                  width: "100%",
                  "& .MuiInputBase-root": {
                    height: "60px",
                  },
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="btns">
                <Button variant="contained" type="submit">
                  Log In
                </Button>
                <Link to={"/SignUp"}>
                  {" "}
                  <Button id="CreateNewAccountBtn" variant="contained">
                    Create New Account
                  </Button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
