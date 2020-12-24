import { Collection, CollectionItem, Icon } from "react-materialize";

type LyricListProps = {
  lyrics: { id: string; content: string; likes: number }[];
};

function LyricList({ lyrics }: LyricListProps) {
  function onLike(id: string, likes: number) {
    alert("liked");
  }

  return (
    <Collection>
      {lyrics.map(({ id, content, likes }) => (
        <CollectionItem key={id}>
          {content}
          <div className="vote-box">
            <Icon onClick={() => onLike(id, likes)}>thumb_up</Icon>
            {likes}
          </div>
        </CollectionItem>
      ))}
    </Collection>
  );
}

export default LyricList;
