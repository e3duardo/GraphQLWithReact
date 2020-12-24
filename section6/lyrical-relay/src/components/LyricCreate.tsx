import React, { useState, useEffect } from "react";
import { TextInput } from "react-materialize";
import { commitMutation, graphql } from "react-relay";

import environment from "../lib/createRelayEnvironment";

type LyricListProps = {
  songId: string;
};

function LyricList({ songId }: LyricListProps) {
  const [content, setContent] = useState("");

  useEffect(() => {
    const input: HTMLInputElement = document.querySelector("input")!;
    input.focus();
  }, []);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    commitMutation(environment, {
      mutation,
      variables: { content, songId },
      onCompleted: () => setContent(""),
      onError: (err: any) => console.error(err),
    });
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <TextInput
        noLayout
        label="Add a Lyric"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
    </form>
  );
}

const mutation = graphql`
  mutation LyricCreateMutation($content: String!, $songId: ID!) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

export default LyricList;
