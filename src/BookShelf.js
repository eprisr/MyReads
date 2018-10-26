import React from 'react'
import { Link } from 'react-router-dom'

class Books extends React.Component {
	render() {
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
										<li>
											<div className="book">
												<div className="book-top">
													<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api")' }}></div>
													<div className="book-shelf-changer">
														<select
															value={this.props.book.shelf}
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
												<div className="book-title">To Kill a Mockingbird</div>
												<div className="book-authors">Harper Lee</div>
											</div>
										</li>
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
