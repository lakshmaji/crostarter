# GraphQL queries

Nothing special, just saving for dev purpose

## Categories

```gql
query list {
  categories {
    name
    description
    iconPathName
  }
}
query get {
  category(id: 3) {
    name
    description
    iconPathName
  }
}

mutation create {
  categoryCreate(
    input: { categoryInput: { name: "banana", description: "he", iconPathName: "sd" } }
  ) {
    clientMutationId
    category {
      name
    }
  }
}

query listCategoriesWithProjects {
  categories {
    id
    name
    projectsCount
    projects {
      id
      title
    }
  }
}
```

## User

```gql
mutation create {
  userCreate(input: { userInput: { username: "banana@mail.com", passwordDigest: "secret" } }) {
    clientMutationId
    user {
      username
    }
  }
}
```

## Project

```gql
query list {
  projects {
    title
    description
  }
}

query get {
  project(id: 3) {
    title
    description
  }
}
```
