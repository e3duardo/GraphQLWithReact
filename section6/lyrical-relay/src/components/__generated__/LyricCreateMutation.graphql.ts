/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type LyricCreateMutationVariables = {
    content: string;
    songId: string;
};
export type LyricCreateMutationResponse = {
    readonly addLyricToSong: {
        readonly id: string | null;
        readonly lyrics: ReadonlyArray<{
            readonly id: string | null;
            readonly content: string | null;
            readonly likes: number | null;
        } | null> | null;
    } | null;
};
export type LyricCreateMutation = {
    readonly response: LyricCreateMutationResponse;
    readonly variables: LyricCreateMutationVariables;
};



/*
mutation LyricCreateMutation(
  $content: String!
  $songId: ID!
) {
  addLyricToSong(content: $content, songId: $songId) {
    id
    lyrics {
      id
      content
      likes
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "content"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "songId"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "content",
        "variableName": "content"
      },
      {
        "kind": "Variable",
        "name": "songId",
        "variableName": "songId"
      }
    ],
    "concreteType": "Song",
    "kind": "LinkedField",
    "name": "addLyricToSong",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "concreteType": "Lyric",
        "kind": "LinkedField",
        "name": "lyrics",
        "plural": true,
        "selections": [
          (v1/*: any*/),
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
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LyricCreateMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LyricCreateMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "b560a096f366d549999534d2dd68c4cc",
    "id": null,
    "metadata": {},
    "name": "LyricCreateMutation",
    "operationKind": "mutation",
    "text": "mutation LyricCreateMutation(\n  $content: String!\n  $songId: ID!\n) {\n  addLyricToSong(content: $content, songId: $songId) {\n    id\n    lyrics {\n      id\n      content\n      likes\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f3ee851a72d8d4fa366187f427e6c11e';
export default node;
