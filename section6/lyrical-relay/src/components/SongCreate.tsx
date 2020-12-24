import React, { useState, useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { TextInput } from "react-materialize";
import { commitMutation } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import environment from "../lib/createRelayEnvironment";

const mutation = graphql`
  mutation SongCreateMutation($title: String!) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

function SongCreate({ history }: RouteComponentProps<{}>) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const input: HTMLInputElement = document.querySelector("input")!;
    input.focus();
  }, []);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    commitMutation(environment, {
      mutation,
      variables: { title },
      onCompleted: (response: any, errors: any) => {
        history.push("/");
      },
      onError: (err: any) => console.error(err),
    });
  }

  return (
    <div>
      <Link to="/">Back</Link>
      <h3>Create a new Song</h3>
      <form onSubmit={(e) => onSubmit(e)}>
        <TextInput
          noLayout
          label="Song Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </form>
    </div>
  );
}

export default SongCreate;
