/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SongListQueryVariables = {};
export type SongListQueryResponse = {
    readonly songs: ReadonlyArray<{
        readonly id: string | null;
        readonly title: string | null;
    } | null> | null;
};
export type SongListQuery = {
    readonly response: SongListQueryResponse;
    readonly variables: SongListQueryVariables;
};



/*
query SongListQuery {
  songs {
    id
    title
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Song",
    "kind": "LinkedField",
    "name": "songs",
    "plural": true,
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
        "name": "title",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SongListQuery",
    "selections": (v0/*: any*/),
    "type": "Root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SongListQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "f0bbf0ceca27103f7d5cee1abec5b2f6",
    "id": null,
    "metadata": {},
    "name": "SongListQuery",
    "operationKind": "query",
    "text": "query SongListQuery {\n  songs {\n    id\n    title\n  }\n}\n"
  }
};
})();
(node as any).hash = 'e21a93064c997de1278759eb6d2712a2';
export default node;
