/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LyricItem_lyric = {
    readonly id: string | null;
    readonly content: string | null;
    readonly likes: number | null;
    readonly " $refType": "LyricItem_lyric";
};
export type LyricItem_lyric$data = LyricItem_lyric;
export type LyricItem_lyric$key = {
    readonly " $data"?: LyricItem_lyric$data;
    readonly " $fragmentRefs": FragmentRefs<"LyricItem_lyric">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LyricItem_lyric",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "likes",
      "storageKey": null
    }
  ],
  "type": "Lyric",
  "abstractKey": null
};
(node as any).hash = 'a5fda2e8521ff0e888fdeb28684991c7';
export default node;
