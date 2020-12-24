import { Link, RouteComponentProps } from "react-router-dom";
import { QueryRenderer, graphql } from "react-relay";

import LyricList from "./LyricList";
import LyricCreate from "./LyricCreate";
import environment from "../lib/createRelayEnvironment";
import { SongDetailQuery } from "./__generated__/SongDetailQuery.graphql";

function SongList({ match }: RouteComponentProps<{ id: string }>) {
  const { id } = match.params;
  return (
    <div>
      <QueryRenderer<SongDetailQuery>
        environment={environment}
        query={graphql`
          query SongDetailQuery($id: ID!) {
            song(id: $id) {
              id
              title
              lyrics {
                id
                content
                likes
              }
            }
          }
        `}
        variables={{ id }}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            const song = (props.song as unknown) as {
              id: string;
              title: string;
              lyrics: { id: string; content: string; likes: number }[];
            };

            return (
              <div>
                <Link to="/">Back</Link>
                <h3>{song.title}</h3>
                <LyricList lyrics={song.lyrics} />
                <LyricCreate songId={song.id} />
              </div>
            );
          }
          return <div>Loading</div>;
        }}
      />
    </div>
  );
}
export default SongList;
