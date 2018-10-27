<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';
import sortBy from 'sort-by';
import Book from './Books';
import * as BooksAPI from './BooksAPI'

class Search extends React.Component {
	state = {
		//books: [],
		results: [],
		query: ''
	}

	componentDidMount(query) {
		if (query === '' || query === undefined) {
			this.setState((state) => ({
				results: []
			}))
		}
		BooksAPI.search(query).then((results) => {

		})
	}

	render() {
		console.log(this.state.query)
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link to='/' className="close-search">Close</Link>
					<div className="search-books-input-wrapper">
						<input type="text" placeholder="Search by title or author"/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid"></ol>
				</div>
			</div>
		)
	};
};

export default Search;
=======
import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Search extends React.Component {
	static propTypes = {
	 	books: PropTypes.array
	}
	state = {
		query: ''
	}
	updateQuery = (query) => {
		let trimmedQuery = query.replace(/^\s+/, '')
		this.setState({ query: trimmedQuery }, this.props.searchResults(query))
	}
	render() {
		const { books, changeShelf } = this.props
		const { query } = this.state

		let results = []
		if (query) {
			const match = new RegExp(escapeRegExp(query), 'i')
			results = books.filter((book) => match.test(book.title))
		} else {
			results = results
		}
		results.sort(sortBy('title'))
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link
						to='/'
						className="close-search"
					>Close</Link>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Search by title or author"
							value={query}
							onChange={(event) => this.updateQuery(event.target.value)}/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{results.map((book) => (
							<li key={book.id} className="book">
								<Book
									book={book}
									changeShelf={changeShelf}
								/>
							</li>
						))}
					</ol>
				</div>
			</div>
		)
	}
}

export default Search
>>>>>>> MyReads
