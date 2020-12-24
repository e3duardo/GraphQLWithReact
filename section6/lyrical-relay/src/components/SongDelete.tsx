import { Icon } from "react-materialize";
import { commitMutation, graphql } from "react-relay";

import environment from "../lib/createRelayEnvironment";

function SongDelete({ id }: { id: string }) {
  function onSongDelete(id: string) {
    commitMutation(environment, {
      mutation,
      variables: { id },
      configs: [
        {
          type: "NODE_DELETE",
          deletedIDFieldName: "id",
        },
      ],
      onError: (err: any) => console.error(err),
    });
  }
  return <Icon onClick={() => onSongDelete(id)}>delete</Icon>;
}

const mutation = graphql`
  mutation SongDeleteMutation($id: ID!) {
    deleteSong(id: $id) {
      id
    }
  }
`;

export default SongDelete;
