import React, { Component } from "react";
import { graphql } from "react-apollo";

import query from "../queries/fetchSong";

class SongDetail extends Component {
  constructor(props) {
    super();
    console.log(props);
  }
  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    const song = this.props.data.song;

    return (
      <div>
        <h3>{song.title}</h3>
      </div>
    );
  }
}

export default graphql(query, {
  options: (props) => {
    return {
      variables: { id: props.params.id },
    };
  },
})(SongDetail);
