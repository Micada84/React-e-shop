import React from "react";
import "./singIn.style.scss";
import FormInput from "../../FormInputComponent/formInput.component";
import CustomButton from "../../CustomButtonComponent/customButton.component";
import { signInWithGoogle } from "../../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
    console.log(event);
    console.log("name", name);
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I alredy have an account</h2>
        <span className="title">Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <label>E-mail</label>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <label>Password</label>
          <FormInput
            name="password"
            type="password"
            label="password"
            value={this.state.password}
            required
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit" value="Submit Form">
              SIGN IN
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGooleSignIn>
              SIGN IN WITH GOOGLE
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
