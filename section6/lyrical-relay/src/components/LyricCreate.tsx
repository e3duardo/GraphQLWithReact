import React, { useState } from "react";
import { TextInput } from "react-materialize";

type LyricListProps = {
  songId: string;
};

function LyricList({ songId }: LyricListProps) {
  const [content, setContent] = useState("");
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("created!");
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

export default LyricList;
