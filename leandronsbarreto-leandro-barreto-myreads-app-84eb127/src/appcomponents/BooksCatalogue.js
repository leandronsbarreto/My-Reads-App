import { getAll } from "../BooksAPI";
import React, { useEffect, useState } from "react";
import BookShelves from "./BookShelves";
import { Link } from "react-router-dom";

/* BooksCatalogue component retrieves data from
* BooksAPI (BooksAPI.js) and BookShelves to render
* main page. <div> element with className of
* "open-search" corresponds a button to add a book
* to the main page. By clicking on this button,
* search bar opens on the main page. */

function BooksCatalogue () {
const [books, selectBooks] = useState([]);

const fetchBooks = () => {
getAll().then((data) => {
selectBooks(data);
});
};

useEffect(() => {
fetchBooks();
}, []);

return (
<div className="list-books">
	<div className="list-books-title">
		<h1>MyReads App</h1>
	</div>
	<div className="list-books-content">
		<div>
			<BookShelves books={books} fetchBooks={fetchBooks}
				bookshelf={"currentlyReading"} title={"Currently Reading"} />
			<BookShelves books={books} fetchBooks={fetchBooks}
				bookshelf={"wantToRead"} title={"Want To Read"} />
			<BookShelves books={books} fetchBooks={fetchBooks}
				bookshelf={"read"} title={"Read"} />
		</div>
	</div>
	<div className="open-search">
		<Link to="/search">Add a book</Link>
	</div>
</div>
);
}

export default BooksCatalogue ;