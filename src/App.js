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
    books: [],
    showSearchPage: false
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  render() {
    return (
      <div className='App'>
        {this.state.showSearchPage ? (
          <Search />
        ) : (
          <AllShelves
            books={this.state.books}
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
