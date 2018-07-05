const { GraphQLServer } = require('graphql-yoga');
const { importSchema } = require('graphql-import');
const data = require('./data');

const typeDefs = importSchema('graphql/schema.graphql');

const resolvers = {
	Query: {
		people: () => data.people,
		person: (_, { name }) => data.people.find((p) => p.name.includes(name)),
	},
};

const server = new GraphQLServer({ typeDefs, resolvers });

const serverOptions = {
	port: 9000
};

server.start(
  serverOptions,
  ({ port }) => console.log(`Server is running on localhost: ${port}`),
);
