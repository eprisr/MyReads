import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

class AllShelves extends React.Component {
	static propTypes = {
		books: PropTypes.array
	}

	render() {
		return(
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						<BookShelf
							name="Currently Reading"
							books={this.props.books.filter((book) => (
								book.shelf === "currentlyReading"
							))}
							updateShelf={this.props.updateShelf}
						/>
						<BookShelf
							name="Want to Read"
							books={this.props.books.filter((book) => (
								book.shelf === "wantToRead"
							))}
							updateShelf={this.props.updateShelf}
						/>
						<BookShelf
							name="Read"
							books={this.props.books.filter((book) => (
								book.shelf === "read"
							))}
							updateShelf={this.props.updateShelf}
						/>
					</div>
				</div>
			</div>
		)
	};
};

export default AllShelves;
