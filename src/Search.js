import React from 'react';
import { Link } from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import Book from './Books';
import * as BooksAPI from './BooksAPI'

class Search extends React.Component {
	state = {
		books: [],
		query: ''
	}

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({ books }) //Fills array with books
		})
	}

	updateQuery = (query) => {
		this.setState({ query: query.trim() })
	}

	clearQuery = (query) => {
		this.setState({ query: '' })
	}

	render() {

		let showBooks
		if (this.state.query) {
			const match = new RegExp(escapeRegExp(this.state.query), 'i');
			showBooks = this.state.books.filter((book) => match.test(book.title))
		} else {
			showBooks = this.state.books;
		};
		console.log(showBooks)

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to='/' className="close-search">Close</Link>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title or author"
							value={this.state.query}
							onChange={(event) => this.updateQuery(event.target.value)}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">

					</ol>
				</div>
			</div>
		)
	};
};

export default Search;
