import { Collection, CollectionItem } from "react-materialize";

import LyricLike from "./LyricLike";

type LyricListProps = {
  lyrics: { id: string; content: string; likes: number }[];
};

function LyricList({ lyrics }: LyricListProps) {
  return (
    <Collection>
      {lyrics.length ? (
        lyrics.map(({ id, content, likes }) => (
          <CollectionItem key={id}>
            {content}
            <LyricLike lyricId={id} likes={likes} />
          </CollectionItem>
        ))
      ) : (
        <CollectionItem style={{ color: "#bcbcbc" }}>
          Nothing Here! Add a lyric below.
        </CollectionItem>
      )}
    </Collection>
  );
}

export default LyricList;
