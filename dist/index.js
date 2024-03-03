import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
const books = [
    {
        id: 1,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
    },
    {
        id: 2,
        title: 'The Da Vinci Code',
        author: 'Dan Brown',
    },
];
const typeDefs = `
    type Book {
		id: ID!
        title: String
        author: String
    }
    type Query {
        books: [Book]
		book(id: ID!): Book
    }
`;
const resolvers = {
    Query: {
        books: () => books,
        book: (parent, args) => books.find(book => book.id === parseInt(args.id)),
    },
};
const server = new ApolloServer({ typeDefs, resolvers });
const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
console.log(`Server ready at ${url}`);
