import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { v1 as uuid } from 'uuid';

const users = [
	{
		id: uuid(),
		name: 'Thomas',
		surname: 'Anderson',
		street: '1234 Main St',
		zip: '12345',
		city: 'Los Angeles',
		phone: '123-456-7890',
	},
	{
		id: uuid(),
		name: 'Daniel',
		surname: 'Smith',
		street: '5678 Elm St',
		zip: '67890',
		city: 'New York',
		phone: '098-765-4321',
	},
];

const typeDefs = `
  type Query {
	users: [User]
  }

  type User {
	id: ID!
	name: String
	surname: String
	street: String
	zip: String
	city: String
	phone: String
	address: String
  }

  type Query {
	allUsers: [User]
	userCount: Int
	findUser(name: String!): User
	findUserById(id: ID!): User
  }
  
  type Mutation {
	addUser(
		name: String!,
		surname: String!,
		street: String!,
		zip: String!,
		city: String!,
		phone: String!
	): User
  }
`;

const resolvers = {
	Query: {
		users: () => users,
		allUsers: () => users,
		userCount: () => users.length,
		findUser: (parent, args) => {
			return users.find(user => user.name === args.name);
		},
		findUserById: (parent, args) => {
			return users.find(user => user.id === args.id);
		},
	},
	Mutation: {
		addUser: (parent, args) => {
			const newUser = {
				id: uuid(),
				name: args.name,
				surname: args.surname,
				street: args.street,
				zip: args.zip,
				city: args.city,
				phone: args.phone,
			};
			users.push(newUser);
			return newUser;
		},
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});

console.log(`Server ready at ${url}`);
