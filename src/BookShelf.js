import React from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class Books extends React.Component {
	render() {
		const { booksOnShelf, changeShelf } = this.props

		return (
			<div>
				<div className="list-books">
					<div className="list-books-content">
						<div>
							<div className="bookshelf">
								<h2 className="bookshelf-title">{this.props.name}</h2>
								<div className="bookshelf-books">
									<ol className="books-grid">
										{booksOnShelf.map((book) => (
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
