import { Icon } from "react-materialize";
import { commitMutation, graphql } from "react-relay";

import environment from "../lib/createRelayEnvironment";

function LyricLike({ lyricId, likes }: { lyricId: string; likes: number }) {
  function onLike(lyricId: string, likes: number) {
    commitMutation(environment, {
      mutation,
      variables: { id: lyricId },
      onError: (err: any) => console.error(err),
    });
  }
  return (
    <div className="vote-box">
      <Icon onClick={() => onLike(lyricId, likes)}>thumb_up</Icon>
      {likes}
    </div>
  );
}

const mutation = graphql`
  mutation LyricLikeMutation($id: ID!) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export default LyricLike;
