const { GraphQLServer } = require('graphql-yoga');
const data = require('./data');

const typeDefs = `
  type Person {
    id: ID!
    name: String!
    email: String!
    occupation: String
    age: Int
  }

  type Query {
    people: [Person]
  }
`;

const resolvers = {
  Query: {
    people: () => data.people,
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });

const serverOptions = {
  port: 9000,
};

server.start(
  serverOptions,
  ({ port }) => console.log(`Server is running on localhost: ${port}`),
);
