import { useState } from "react";
import BookItem from "./BookItem";
import { search } from "../BooksAPI";
import { Link } from "react-router-dom";

/* Whenever "Add a book" button on the main page is
* pushed, Finder component retrieves data from BooksAPI
* (BooksAPI.js) and BookItem (BookItem.js) component.
* User can insert a query in the search bar to find a
* book and it to the main page. */

function Finder () {
const [books, selectBooks] = useState([]);

function wrappedBooks(element) {
if (element.target.value) {
search(element.target.value, 10).then((data) => {
selectBooks(data && !data.error ? data : []);
});
} else {
selectBooks([]);
}
};

return (
<div className="search-books">
	<div className="search-books-bar">
		<Link to="/" className="close-search">
		Close
		</Link>
		<div className="search-books-input-wrapper">
			<input type="text" placeholder="Search by title, author, or ISBN"
				onChange={wrappedBooks} />
		</div>
	</div>
	<div className="search-books-results">
		<ol className="books-grid">
			{books.map((book) => {
			return (
			<li key={book.id}>
				<BookItem book={book} />
			</li>
			);
			})}
		</ol>
	</div>
</div>
);
}

export default Finder;