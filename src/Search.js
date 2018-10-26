import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class Search extends React.Component {
	static propTypes = {
		books: PropTypes.array.isRequired
	}
	state = {
		query: ''
	}
	updateQuery = (query) => {
		this.setState({ query: query.trim() }, this.props.searchResults(query))

	}
	render() {
		const { books } = this.props
		const { query } = this.state

		let results
		if (query) {
			const match = new RegExp(escapeRegExp(query), 'i')
			results = books.filter((book) => match.test(book.id))
		} else {
			results = books
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
								<div className="book-top">
									<div
										className="book-cover"
										style={{
											width: 128,
											height: 193,
											backgroundImage: `url(${(book.imageLinks && book.imageLinks.thumbnail) || ""})`
										}}>
									</div>
									<div className="book-shelf-changer">
										<select

										>
											<option value="move" disabled>Move to...</option>
											<option value="currentlyReading">Currently Reading</option>
											<option value="wantToRead">Want to Read</option>
											<option value="read">Read</option>
											<option value="none">None</option>
										</select>
									</div>
								</div>
								<div className="book-title">{book.title}</div>
								<div className="book-authors">{book.authors || ""}</div>
							</li>
						))}
					</ol>
				</div>
			</div>
		)
	}
}

export default Search
