import React from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import { FormGroup } from '@mui/material';
import "./Login.css";
import { useNavigate } from "react-router-dom";
// import { withRouter } from "react-router";

// import { hashHistory } from 'react-router-dom;'
// import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
// import componentTypes from '@data-driven-forms/react-form-renderer/component-types';
// import validatorTypes from '@data-driven-forms/react-form-renderer/validator-types';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirm_email: "",
    };
  }

  componentDidMount() {
    //   this.schema()
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit button clicked");
    localStorage.setItem("dashboard", true);
    console.log("localstorage", localStorage.getItem("dashboard"));
    console.log("login component props value", this.props);
    // this.props.hashHistory.push('/dashboard')
    this.props.history.push("/dashboard");

    // <Link href='dashboard'></Link>
  };

  //   schema =()=>{
  //     return {
  //         fields: [{
  //             component: componentTypes.TEXT_FIELD,
  //             name: 'name',
  //             label:'Your name',
  //             isRequired: true,
  //             validate: [{ type: validatorTypes.REQUIRED }]
  //           //   validate: [{type: 'required', message: 'This field is required'}]
  //           }, {
  //             component: componentTypes.TEXT_FIELD,
  //             name: 'email',
  //             label: 'Email',
  //             isRequired: true,
  //             validate: [
  //               { type: validatorTypes.REQUIRED },
  //               {
  //                 type: validatorTypes.PATTERN,
  //                 pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$',
  //                 message: 'Not valid email'
  //               }
  //             ]
  //           },{
  //             component: componentTypes.TEXT_FIELD,
  //             name: 'confirm-email',
  //             label: 'Confirm email',
  //             type: 'email',
  //             isRequired: true,
  //             validate: [
  //               { type: validatorTypes.REQUIRED },
  //               { type: 'same-email' }]
  //           },{
  //             component: componentTypes.CHECKBOX,
  //             name: 'newsletters',
  //             label: 'I want to receive newsletter'
  //           }]
  //       }
  // }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="loginContainer">
        <Card sx={{ maxWidth: 500 }}>
          {/* <FormGroup onSubmit={this.handleSubmit}> */}
          <h1>Login</h1>
          <TextField
            id="filled-basic"
            label="Username"
            name="username"
            variant="filled"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <br />
          <TextField
            id="filled-basic"
            label="Email"
            name="email"
            variant="filled"
            onChange={this.handleChange}
          />
          <br />
          <br />
          <br />
          <TextField
            id="filled-basic"
            label="Confirm email"
            name="confirm_email"
            variant="filled"
            onChange={this.handleChange}
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
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
          <br />
          <br />
          <br />
          {/* </FormGroup> */}
        </Card>
      </div>
    );
  }
}
export default (props) => <Login {...props} history={useNavigate()} />;
