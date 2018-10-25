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
						{this.props.books.map((book) =>
							<Books
								key={book.id}
								book={book}
								updateShelf={this.props.updateShelf}
							/>)}
					</ol>
				</div>
			</div>
		)
	};
};

export default BookShelf;
