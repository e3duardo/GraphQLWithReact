/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SongDeleteMutationVariables = {
    id: string;
};
export type SongDeleteMutationResponse = {
    readonly deleteSong: {
        readonly id: string | null;
    } | null;
};
export type SongDeleteMutation = {
    readonly response: SongDeleteMutationResponse;
    readonly variables: SongDeleteMutationVariables;
};



/*
mutation SongDeleteMutation(
  $id: ID!
) {
  deleteSong(id: $id) {
    id
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
    "concreteType": "Song",
    "kind": "LinkedField",
    "name": "deleteSong",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
    "name": "SongDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SongDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c1254379627283809b3371defa53bdc7",
    "id": null,
    "metadata": {},
    "name": "SongDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation SongDeleteMutation(\n  $id: ID!\n) {\n  deleteSong(id: $id) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '63f11758e9841213b68e1bc7bacb18b0';
export default node;
