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
  changeShelf = (book) => {
    this.setState((state) => ({
      booksOnShelf: state.booksOnShelf.filter((b) => b.id !== book.id).concat([book])
    }))
  }
  searchResults(query) {
    BooksAPI.search(query).then(books => {
      console.log(books)
      this.setState(state=> ({
        books: state.books.concat([ books ])
      }))
    })
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <BookShelf
            changeShelf={this.changeShelf}
            booksOnShelf={this.state.booksOnShelf}
          />
        )}/>
        <Route path='/search' render={() => (
          <Search
            searchResults={this.searchResults}
            books={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
