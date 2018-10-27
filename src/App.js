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
    BooksAPI.search(query).then(books => {
      console.log(books)
      this.setState(state=> ({
        books: state.books.concat( books )
      }))
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
            books={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
