import React, { Component } from "react";
import { Link } from "react-router";
import { graphql } from "react-apollo";

import LyricCreate from "./LyricCreate";
import query from "../queries/fetchSong";

class SongDetail extends Component {
  render() {
    const { song, loading } = this.props.data;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3>{song.title}</h3>
        <ul>
          {song.lyrics.map((lyric) => (
            <li>{lyric.content}</li>
          ))}
        </ul>
        <LyricCreate song={song} />
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
