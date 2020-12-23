import React, { Component } from "react";
import { Link } from "react-router";

class LyricList extends Component {
  onLyricLike() {
    console.log("liked");
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content }) => (
      <li key={id} className="collection-item">
        {content}
        <i className="material-icons" onClick={() => this.onLyricLike(id)}>
          thumb_up
        </i>
      </li>
    ));
  }

  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

const mutation = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      title
    }
  }
`;

export default graphql(mutation)(LyricList);
