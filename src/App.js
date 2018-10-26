import React from 'react'
import { Route } from 'react-router-dom'
import Books from './Books'
import Search from './Search'
import * as BooksAPI from './utils/BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Books
            books={this.state.books}
          />
        )}/>
        <Route path='/search' component={Search} />
      </div>
    )
  }
}

export default BooksApp
