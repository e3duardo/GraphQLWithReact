import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }
  render() {
    return (
      <div>
        <h3>Create a new Song</h3>
        <form>
          <label>Song Title</label>
          <input
            value={this.state.title}
            onChange={(event) => this.setState({ title: event.target.value })}
          />
        </form>
      </div>
    );
  }
}

const query = gql`
  mutation {
    addSong(title: "knock on heavens door") {
      id
    }
  }
`;

export default graphql(query)(SongCreate);
