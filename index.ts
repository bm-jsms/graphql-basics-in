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
