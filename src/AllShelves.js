import React from 'react';

class AllShelves extends Component {
	state = {}

	render() {
		return(
			<div className="app">
				<div className="list-books">
					<div className="list-books-title">
						<h1>MyReads</h1>
					</div>
					<div className="list-books-content">
						// BookShelf
					</div>
					<div className="open-search">
						<a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
					</div>
				</div>
        )}
      </div>
		)
	}
}

export default AllShelves;
