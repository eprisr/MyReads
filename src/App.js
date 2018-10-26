import React from 'react'
import { Route } from 'react-router-dom'
import Books from './Books'
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
  searchResults(query) {
    BooksAPI.search(query).then(books => {
      this.setState(state=> ({
        books: state.books.concat([ books ])
      }))
    })
  }
  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Books
            booksOnShelf={this.state.booksOnShelf}
          />
        )}/>
        <Route path='/search' render={() => (
          <Search
            searchResults={(book) => {
              this.searchResults(book)
            }}
            books={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
