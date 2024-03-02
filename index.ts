import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { log } from 'console';

const books = [
	{
		title: 'The Great Gatsby',
		author: 'F. Scott Fitzgerald',
	},
	{
		title: 'The Da Vinci Code',
		author: 'Dan Brown',
	},
];

const typeDefs = `
    type Book {
        title: String
        author: String
    }
    type Query {
        books: [Book]
    }
`;

const resolvers = {
	Query: {
		books: () => books,
	},
};

const server = new ApolloServer({ typeDefs, resolvers });
