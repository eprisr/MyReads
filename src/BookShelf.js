import React from 'react'
import { Link } from 'react-router-dom'

class Books extends React.Component {
	render() {
		const { booksOnShelf } = this.props

		return (
			<div>
				<div className="list-books">
					<div className="list-books-title">
						<h1>MyReads</h1>
					</div>
					<div className="list-books-content">
						<div>
							<div className="bookshelf">
								<h2 className="bookshelf-title">Currently Reading</h2>
								<div className="bookshelf-books">
									<ol className="books-grid">
										{booksOnShelf.map((book) => (
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
															value={book.shelf}
															onChange={(event) => this.changeShelf(event.target.value)}
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
						</div>
					</div>
					<Link
						to='/search'
						className='open-search'
					>Add a book</Link>
				</div>
			</div>
		)
	}
}

export default Books
