/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SongDetailQueryVariables = {
    id: string;
};
export type SongDetailQueryResponse = {
    readonly song: {
        readonly id: string | null;
        readonly title: string | null;
        readonly lyrics: ReadonlyArray<{
            readonly id: string | null;
            readonly content: string | null;
            readonly likes: number | null;
        } | null> | null;
    } | null;
};
export type SongDetailQuery = {
    readonly response: SongDetailQueryResponse;
    readonly variables: SongDetailQueryVariables;
};



/*
query SongDetailQuery(
  $id: ID!
) {
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
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
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
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Song",
    "kind": "LinkedField",
    "name": "song",
    "plural": false,
    "selections": [
      (v1/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
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
    "name": "SongDetailQuery",
    "selections": (v2/*: any*/),
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SongDetailQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "2c6bb9fda011fe408e07c692878bd208",
    "id": null,
    "metadata": {},
    "name": "SongDetailQuery",
    "operationKind": "query",
    "text": "query SongDetailQuery(\n  $id: ID!\n) {\n  song(id: $id) {\n    id\n    title\n    lyrics {\n      id\n      content\n      likes\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '438a6408a66ddf444df7a29818d61f64';
export default node;
