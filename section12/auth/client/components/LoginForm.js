import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";

import query from "../queries/CurrentUser";
import mutation from "../mutations/Logout";

class LoginForm extends Component {
  render() {
    return <div>LoginForm</div>;
  }
}

export default LoginForm;
