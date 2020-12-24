import React, { useState } from "react";
import { TextInput } from "react-materialize";

function SongCreate() {
  const [title, setTitle] = useState("");
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("created!");
  }

  return (
    <div>
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
