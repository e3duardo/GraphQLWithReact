import React, { Component } from "react";
import { graphql } from "react-apollo";

import query from "../queries/CurrentUser";

class Header extends Component {
  render() {
    if (this.props.data.loading) {
      return null;
    }

    if (this.props.data.user) {
      return <div>user</div>;
    }

    return <div>Header</div>;
  }
}

export default graphql(query)(Header);
