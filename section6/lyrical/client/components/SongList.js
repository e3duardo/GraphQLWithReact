import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class SongList extends Component {
  render() {
    const { data } = this.props;

    if (data.loading) {
      return <p>Loading...</p>;
    }
    return (
      <ul>
        {data.songs.map((s) => (
          <li key={s.id}>{s.title}</li>
        ))}
      </ul>
    );
  }
}

const query = gql`
  query {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongList);
