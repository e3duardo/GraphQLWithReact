import { Link } from "react-router-dom";
import { Collection, CollectionItem } from "react-materialize";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";

import environment from "../lib/createRelayEnvironment";
import {
  SongListQuery,
  SongListQueryResponse,
} from "./__generated__/SongListQuery.graphql";
import FloatingButton from "./FloatingButton";
import SongDelete from "./SongDelete";

function SongList() {
  function renderSongs(songs: { id: string; title: string }[]) {
    return songs.map(({ id, title }) => {
      return (
        <CollectionItem key={id}>
          <Link to={`/songs/${id}`}>{title}</Link>
          <SongDelete id={id} />
        </CollectionItem>
      );
    });
  }

  return (
    <div>
      <QueryRenderer<SongListQuery>
        environment={environment}
        query={graphql`
          query SongListQuery {
            songs {
              id
              title
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            const songs = (props.songs?.filter(
              (s) => s !== null
            ) as unknown) as { id: string; title: string }[];
            return (
              <Collection>
                {songs.length ? (
                  renderSongs(songs)
                ) : (
                  <CollectionItem style={{ color: "#bcbcbc" }}>
                    Nothing Here! Add a song on the button below.
                  </CollectionItem>
                )}
              </Collection>
            );
          }
          return <div>Loading</div>;
        }}
      />
      <FloatingButton to="/songs/new" />
    </div>
  );
}
export default SongList;
