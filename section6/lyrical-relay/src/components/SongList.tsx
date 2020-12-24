import { Link } from "react-router-dom";
import { Collection, CollectionItem, Icon } from "react-materialize";
import { QueryRenderer } from "react-relay";
import graphql from "babel-plugin-relay/macro";
import environment from "../lib/createRelayEnvironment";

import {
  SongListQuery,
  SongListQueryResponse,
} from "./__generated__/SongListQuery.graphql";
import FloatingButton from "./FloatingButton";

function SongList() {
  function onSongDelete(id: string) {
    alert("deleted!");
  }

  function renderSongs(resp: SongListQueryResponse) {
    const songs = (resp.songs as unknown) as { id: string; title: string }[];
    return songs.map(({ id, title }) => {
      return (
        <CollectionItem key={id}>
          <Link to={`/songs/${id}`}>{title}</Link>
          <Icon onClick={() => onSongDelete(id)}>delete</Icon>
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
            return props.songs && <Collection>{renderSongs(props)}</Collection>;
          }
          return <div>Loading</div>;
        }}
      />
      <Link to="/songs/new" component={FloatingButton} />
    </div>
  );
}
export default SongList;
