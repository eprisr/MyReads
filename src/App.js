<<<<<<< HEAD
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
=======
import React from 'react'
import { Route } from 'react-router-dom'
import BookShelf from './BookShelf'
import Search from './Search'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    booksOnShelf: [],
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((booksOnShelf) => {
      this.setState({ booksOnShelf });
    })
  }
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((response) => { //updates
      book.shelf = shelf; //updates book.shelf to shelf
      this.setState((state) => ({ //changes state, passes function and merges
        booksOnShelf: state.booksOnShelf.filter((b) => b.id !== book.id).concat([book])
      }))
    })
  }
  searchResults(query) {
    if(query === "" || query === undefined) {
      return this.setState({ results: [] })
    }
    BooksAPI.search(query).then(books => {
      //forEach - Ryan Waite's FEND 6 Long Tutorial
      books.forEach(b => { //loops through each book (search)
        //Holds book in search that's already on shelf
        let s = this.state.booksOnShelf.filter(bOS => bOS.id === b.id);
        //Sets book.shelf to that of booksonShelf.shelf
        if(s[0]) {
          b.shelf = s[0].shelf;
        }
      })
      this.setState({ books })
    }).catch(error => {
      this.setState({ results: [] })
    })
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div>
            <div className="list-books-title">
  						<h1>MyReads</h1>
  					</div>
            <BookShelf
              name='Currently Reading'
              changeShelf={this.changeShelf}
              booksOnShelf={this.state.booksOnShelf.filter((book) => (
                book.shelf === "currentlyReading"
              ))}
            />
            <BookShelf
              name='Want to Read'
              changeShelf={this.changeShelf}
              booksOnShelf={this.state.booksOnShelf.filter((book) => (
                book.shelf === "wantToRead"
              ))}
            />
            <BookShelf
              name='Read'
              changeShelf={this.changeShelf}
              booksOnShelf={this.state.booksOnShelf.filter((book) => (
                book.shelf === "read"
              ))}
            />
          </div>
        )}/>
        <Route path='/search' render={() => (
          <Search
            searchResults={(query) => {
              this.searchResults(query)
            }}
            changeShelf={this.changeShelf}
            books={this.state.books}
>>>>>>> MyReads
          />
        )}/>
      </div>
    )
  };
};

export default BooksApp
