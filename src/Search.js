import React from 'react';
import { Link } from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import Book from './Books';
import * as BooksAPI from './BooksAPI'

class Search extends React.Component {
	state = {
		books: [],
		showBooks: [],
		query: ''
	}

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			//console.log(books)
			this.setState({ books }) //Fills array with books
		})
	}

	updateQuery = (query) => {
		this.setState({ query: query.trim() }, this.searching)
		//console.log(this.state.showBooks)
	}

	clearQuery = (query) => {
		this.setState({ query: '' })
	}

	searching() {
		BooksAPI.search(this.state.query).then((showBooks) => {
			this.setState({ showBooks })
			if (showBooks) {
				const match = new RegExp(escapeRegExp(this.state.query), 'i');
				this.setState((state) => ({
					showBooks: this.state.showBooks.filter((book) => match.test(book.title))
				}))
			} else {
				this.setState((state) => ({
					showBooks: this.state.showBooks
				}))
			}
		})
	};

	render() {
		console.log(this.state.showBooks)
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
						{this.state.showBooks.map((book, key) => (
							<Book book={book} key={key}/>
						))}
					</ol>
				</div>
			</div>
		)
	};
};

export default Search;
