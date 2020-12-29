import React, { Component } from "react";
import { graphql } from "react-apollo";

import mutation from "../mutations/Login";
import AuthForm from "./AuthForm";

class LoginForm extends Component {
  onLogin({ email, password }) {
    this.props.mutate({
      args: {
        email,
        password,
      },
    });
  }

  render() {
    return (
      <div>
        <h3>Login</h3>
        <AuthForm />
      </div>
    );
  }
}

export default graphql(mutation)(LoginForm);
