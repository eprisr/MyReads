import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import './App.css';
import AllShelves from './AllShelves';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    books: [], //sets empty state array to be filled with API
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books }) //Fills array with books
    })
  }
  updateShelf = (book, shelf) => { //takes in book and shelf of book clicked
		BooksAPI.update(book, shelf).then((response) => { //updates
      book.shelf = shelf; //updates book.shelf to shelf
      this.setState((props) => ({ //changes state, passes function and merges
        books: props.books.filter((b) => b.id !== book.id).concat(book) //filters through books, removes book from on shelf and place on another
      }))
    })
	}
  render() {
    return (
      <div className='App'>
        <Route path='/search' component={Search} />
        <Route exact path='/' render={() => (
          <AllShelves
            books={this.state.books} //passes down all books
            updateShelf={this.updateShelf} //passes down function
          />
        )}/>
      </div>
    )
  };
};

export default BooksApp
