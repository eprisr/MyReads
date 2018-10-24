import React from 'react';
import Books from './Books';

class BookShelf extends React.Component {
	//state = {}

	render() {
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.name}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{this.props.books.map((book, index) =>
							<Books
								book={book}
								index={index}
							/>)}
					</ol>
				</div>
			</div>
		)
	};
};

export default BookShelf;
