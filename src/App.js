import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import AllShelves from './AllShelves';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [], //sets empty state array to be filled with API
    showSearchPage: false
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books }) //Fills array with books
    })
  }
  updateShelf = (book, shelf) => { //takes in book and shelf of book clicked
		BooksAPI.update(book, shelf).then((response) => { //updates
      console.log(response);
      book.shelf = shelf; //updates book.shelf to shelf
      console.log(book.shelf);
      this.setState((props) => ({ //changes state, passes function and merges
        books: props.books.filter((b) => b.id !== book.id).concat(book) //filters through books, removes book from on shelf and place on another
      }))
      console.log(book);
      console.log(this.state.books.book)
    })
	}
  render() {
    return (
      <div className='App'>
        {this.state.showSearchPage ? (
          <Search />
        ) : (
          <AllShelves
            books={this.state.books} //passes down all books
            updateShelf={this.updateShelf} //passes down function
          />
        )}
        <div className='open-search'>
          <a onClick={() => this.setState({ showSearchPage: true })}>
            Add a book
          </a>
        </div>
      </div>
    )
  };
};

export default BooksApp
