# http://localhost:4000/graphql

```graphql
query findCompany {
  apple: company(id: "2") {
    ...companyDetails
  }
  google: company(id: "2") {
    ...companyDetails
  }
}

query findUsers {
  users {
    id
    firstName
    slug
    company {
      id
      name
    }
  }
}

mutation addUser {
  addUser(firstName: "Eduardo", age: 30) {
    id
    firstName
  }
}
mutation deleteUser {
  deleteUser(id: "YqZbWTl")
}

mutation editUser {
  editUser(id: "KpJBile", firstName: "Eduardo Santos") {
    id
    firstName
  }
}

fragment companyDetails on Company {
  id
  name
  description
}
```
