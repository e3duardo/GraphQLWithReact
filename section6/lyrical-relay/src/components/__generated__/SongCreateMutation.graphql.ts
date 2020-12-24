/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SongCreateMutationVariables = {
    title: string;
};
export type SongCreateMutationResponse = {
    readonly addSong: {
        readonly id: string | null;
        readonly title: string | null;
    } | null;
};
export type SongCreateMutation = {
    readonly response: SongCreateMutationResponse;
    readonly variables: SongCreateMutationVariables;
};



/*
mutation SongCreateMutation(
  $title: String!
) {
  addSong(title: $title) {
    id
    title
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "title"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
      }
    ],
    "concreteType": "Song",
    "kind": "LinkedField",
    "name": "addSong",
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
        "name": "title",
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
    "name": "SongCreateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SongCreateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c7d7b4512e682fc2c44f3e61eb644c16",
    "id": null,
    "metadata": {},
    "name": "SongCreateMutation",
    "operationKind": "mutation",
    "text": "mutation SongCreateMutation(\n  $title: String!\n) {\n  addSong(title: $title) {\n    id\n    title\n  }\n}\n"
  }
};
})();
(node as any).hash = '253fdc9ffc3e2a59fdca7f0c9d2a7e5f';
export default node;
