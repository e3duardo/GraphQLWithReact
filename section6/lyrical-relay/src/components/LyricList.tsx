import { Collection, CollectionItem } from "react-materialize";

import LyricLike from "./LyricLike";

type LyricListProps = {
  lyrics: { id: string; content: string; likes: number }[];
};

function LyricList({ lyrics }: LyricListProps) {
  return (
    <Collection>
      {lyrics.map(({ id, content, likes }) => (
        <CollectionItem key={id}>
          {content}
          <LyricLike lyricId={id} likes={likes} />
        </CollectionItem>
      ))}
    </Collection>
  );
}

export default LyricList;
