import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

class AllShelves extends React.Component {
	static propTypes = {
		books: PropTypes.array
	}

	render() {
		return(
			<div>
				<div className="list-books">
					<div className="list-books-title">
						<h1>MyReads</h1>
					</div>
					<div className="list-books-content">
						<div>
							<BookShelf
								name="Currently Reading" //Sets name of bookshelf
								books={this.props.books.filter((book) => (
									book.shelf === "currentlyReading" //keeps books with currentlyReading
								))}
								updateShelf={this.props.updateShelf} //passes down function
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
				<Link to='/search' className='open-search'>
					Add a book
				</Link>
			</div>
		)
	};
};

export default AllShelves;
