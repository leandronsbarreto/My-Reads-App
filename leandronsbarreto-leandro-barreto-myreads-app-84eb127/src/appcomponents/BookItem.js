import { update, get } from "../BooksAPI";
import { useState, useEffect } from "react";

/* BookItem component checks whether the states of a book
* on the main page and on the search page are
* the same. This code section updates state of books
* accordingly based on BooksAPI (BooksAPI.js) and props. */

const BookItem = (props) => {
const [book, selectBook] = useState({});

function shelfUpdate (element) {
update(book, element.target.value).then(() => {
if (props.fetchBooks) {
props.fetchBooks();
}
});
}

useEffect(() => {
get(props.book.id).then((data) => {
selectBook(data);
});
});

return (
<div className="book">
	<div className="book-top">
		{props.book.imageLinks?.smallThumbnail ? (
		<div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage:
                'url("' + props.book.imageLinks.smallThumbnail + '")',
            }}></div>
		) : (
		<div className="book-cover" style={{
              width: 128,
              height: 193,
              backgroundImage: 'url("https://via.placeholder.com/150")',
            }}></div>
		)}
		<div className="book-shelf-changer">
			<select value={book.shelf ? book.shelf : "none" }
				onChange={shelfUpdate }>
				<option disabled>Move to...</option>
				<option value="currentlyReading">Currently Reading</option>
				<option value="wantToRead">Want to Read</option>
				<option value="read">Read</option>
				<option value="none">None</option>
			</select>
		</div>
	</div>
	<div className="book-title">{book.title}</div>
	{book.authors ? (
	<div className="book-authors">
		{book.authors && book.authors.join(", ")}
	</div>
	) : (
	""
	)}
</div>
);
};

export default BookItem;