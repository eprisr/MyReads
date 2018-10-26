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
