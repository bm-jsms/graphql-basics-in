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

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, {
	listen: { port: 4000 },
});

console.log(`Server ready at ${url}`);
