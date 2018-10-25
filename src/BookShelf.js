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
						{this.props.books.map((book) => //maps through 1 of 3 shelves
							<Books
								key={book.id}
								book={book} //passes down books on this shelf only!
								updateShelf={this.props.updateShelf} //passes down function
							/>)}
					</ol>
				</div>
			</div>
		)
	};
};

export default BookShelf;
