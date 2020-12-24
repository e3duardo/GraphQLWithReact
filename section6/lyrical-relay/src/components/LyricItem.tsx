import { CollectionItem } from "react-materialize";

import LyricLike from "./LyricLike";
import { graphql, createFragmentContainer } from "react-relay";

type LyricItemProps = {
  lyric: { id: string; content: string; likes: number };
};

function LyricItem({ lyric: { id, content, likes } }: LyricItemProps) {
  return (
    <CollectionItem key={id}>
      {content}
      <LyricLike lyricId={id} likes={likes} />
    </CollectionItem>
  );
}

// export default LyricItem;

export default createFragmentContainer(LyricItem, {
  lyric: graphql`
    # As a convention, we name the fragment as '<ComponentFileName>_<propName>'
    fragment LyricItem_lyric on Lyric {
      id
      content
      likes
    }
  `,
});
