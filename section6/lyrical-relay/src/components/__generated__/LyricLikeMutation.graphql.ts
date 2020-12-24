/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type LyricLikeMutationVariables = {
    id: string;
};
export type LyricLikeMutationResponse = {
    readonly likeLyric: {
        readonly id: string | null;
        readonly likes: number | null;
    } | null;
};
export type LyricLikeMutation = {
    readonly response: LyricLikeMutationResponse;
    readonly variables: LyricLikeMutationVariables;
};



/*
mutation LyricLikeMutation(
  $id: ID!
) {
  likeLyric(id: $id) {
    id
    likes
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
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Lyric",
    "kind": "LinkedField",
    "name": "likeLyric",
    "plural": false,
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
        "name": "likes",
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
    "name": "LyricLikeMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LyricLikeMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "74977a926b8b7db4bea9ed36161ad4a9",
    "id": null,
    "metadata": {},
    "name": "LyricLikeMutation",
    "operationKind": "mutation",
    "text": "mutation LyricLikeMutation(\n  $id: ID!\n) {\n  likeLyric(id: $id) {\n    id\n    likes\n  }\n}\n"
  }
};
})();
(node as any).hash = '8b6abc3add8daca026a96f850fb9d9bb';
export default node;
