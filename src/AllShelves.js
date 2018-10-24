import React from 'react';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

class AllShelves extends React.Component {
	static propTypes = {
		books: PropTypes.array
	}
	//state = {}

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
						/>
						<BookShelf
							name="Want to Read"
							books={this.props.books.filter((book) => (
								book.shelf === "wantToRead"
							))}
						/>
						<BookShelf
							name="Read"
							books={this.props.books.filter((book) => (
								book.shelf === "read"
							))}
						/>
					</div>
				</div>
			</div>
		)
	};
};

export default AllShelves;
