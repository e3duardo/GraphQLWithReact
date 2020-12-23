import React, { Component } from "react";
import { Link, hashHistory } from "react-router";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

import query from "../queries/fetchSong";

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
  }

  onSubmit(event) {
    event.preventDefault();

    console.log(this.props.song);
    this.props
      .mutate({
        variables: {
          content: this.state.content,
          songId: this.props.song.id,
        },
        // refetchQueri es: [{ query }],
      })
      .then((e) => this.setState({ content: "" }));
    //   .catch((e) => console.error(e));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a Lyric</label>
        <input
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
      </form>
    );
  }
}

const mutation = gql`
  mutation AddSong($content: String!, $songId: ID!) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        content
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);