import { React, useState, useEffect, useContext } from "react";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import "./Login.css";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext, UserConsumer } from "../UserContext.js";

function Login(props) {
  //  let navigate= useNavigate()
  //  let  {id}  = useParams()

  // const [user, setUser]=useState({username:'' , email:'' ,password:'' })
  const [flag, setFlag] = useState("");
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    console.log("useEffect executed");
    console.log("flagvalue", flag);
  }, [flag]);

  const handleSubmit = (e) => {
    // e.preventDefault()
    console.log("login1 props value", props);
    localStorage.setItem("dashboard", "loggedIn");
    // window.location.reload(true);
    setFlag("true");
    console.log("login component user value", user);

    console.log("localstorage", localStorage.getItem("dashboard"));
    //  navigate('/dashboard/itemlist')
  };

  const handleChange = (e) => {
    console.log("e.target.value");
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const mouseCount = () => {
    console.log("Mouse hovered on submit button");
  };

  return (
    <div className={10===10? 'loginContainer' : ''}>
      <Card sx={{ maxWidth: 500 }}>
        <h1>Login</h1>
        <TextField
          id="filled-basic"
          label="Username"
          name="username"
          variant="filled"
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <br />
        <TextField
          id="email"
          label="Email"
          name="email"
          variant="filled"
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <br />
        <TextField
          id="password"
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          autoComplete="current-password"
          variant="filled"
          required
        />
        <br />
        <br />
        <br />

        <Button
          sx={{
            width: 225,
            maxWidth: "100%",
          }}
          variant="contained"
          href="dashboard/itemlist"
          onMouseOver={mouseCount}
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <br />
        <br />
        <br />
      </Card>
    </div>
  );
}
export default Login;
