import BookItem from "./BookItem";

/* BookShelves component reflects data from BookItem
* component (BookItem.js), which checks the state of
* every single book, in order to update book shelves
* with filter() and props. */

const BookShelves = (props) => {
const books = props.books;

const filter = (book) => {
return book.shelf == props.bookshelf;
};

return (
<div>
	<div className="bookshelf">
		<h2 className="bookshelf-title"> {props.title}</h2>
		<div className="bookshelf-books">
			<ol className="books-grid">
				{books.filter(filter).map((book) => {
				return (
				<li key={book.id}>
					<BookItem book={book} fetchBooks={props.fetchBooks} />
				</li>
				);
				})}
			</ol>
		</div>
	</div>
</div>
);
};

export default BookShelves;