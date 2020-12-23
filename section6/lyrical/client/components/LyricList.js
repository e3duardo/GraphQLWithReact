import React, { Component } from "react";
import { Link } from "react-router";

class LyricList extends Component {
  renderLyrics() {
    return <li className="collection-item">ok</li>;
  }

  render() {
    return <ul className="collection">{this.renderLyrics()}</ul>;
  }
}

export default LyricList;
