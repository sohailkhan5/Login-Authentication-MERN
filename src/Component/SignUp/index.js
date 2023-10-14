import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [name,setName]=useState("");
  const [surename,setSurename]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate()

  const handleSubmit=(e)=>{
  e.preventDefault();
  axios.post('http://localhost:3001/signup',{name,surename,email,password})
  .then(result =>{console.log(result)
  navigate('/')
  })
  .catch(err=>console.log(err));

    
  }

  return (
    <div className="SignUpPage">
      <div className="SignUpCard">
        <div className="SignUpContent">
          <div className="header">
            <h1>Welcome to Crypto App</h1>
            <p>Create a free account by filling data below.</p>
          </div>
     <form onSubmit={handleSubmit}>
          <div className="Fields">
            <div className="NameSureName">
              <TextField
                label="Name"
                sx={{
                  width: "100%",
                  "& .MuiInputBase-root": {
                    height: "60px",
                  },
                }}
                value={name}
                onChange={(e)=>setName(e.target.value)}
                type="name"
                required
              />
              <TextField
                label="SureName"
                sx={{
                  width: "100%",
                  "& .MuiInputBase-root": {
                    height: "60px",
                  },
                }}
                value={surename}
                onChange={(e)=>setSurename(e.target.value)}
                type="name"
                required
              />
            </div>
            <div className="FullField">
              <TextField
                label="Email"
                sx={{
                  width: "100%",
                  "& .MuiInputBase-root": {
                    height: "60px",
                  },
                }}
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type="email"
                required
              />
              <TextField
                label="Password"
                sx={{
                  width: "100%",
                  "& .MuiInputBase-root": {
                    height: "60px",
                  },
                }}
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type="password"
                required
              />
              
              <Button
                type="submit"
              >
                Create Account
              </Button>
              
              <p>
                Already have an account?<Link to={"/"}>Log In</Link>
              </p>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
