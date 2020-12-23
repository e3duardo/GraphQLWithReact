import React, { Component } from "react";
import { Link, hashHistory } from "react-router";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import query from "../queries/fetchSongs";

class LyricCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props
      .mutate({
        variables: {
          title: this.state.title,
        },
        refetchQueries: [{ query }],
      })
      .then((e) => hashHistory.push("/"))
      .catch((e) => console.error(e));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
      </form>
    );
  }
}

const mutation = gql`
  mutation AddSong($content: String!, $songId: ID!) {
    addLyricToSong(content: $content, songId: $songId) {
      id
    }
  }
`;

export default graphql(mutation)(LyricCreate);
