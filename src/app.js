'use strict'

import React, { Component } from 'react'

import './css/style.css'

class App extends Component {
  constructor() {
    super()

    this.handleSubmit = (e) => {
      e.preventDefault();
      this.setState({value: e.target.textarea.value})
    }

    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <div className='editor'>
        <form onSubmit={this.handleSubmit}>
          <textarea name='textarea' />
          <button type='submit'>Renderizar</button>
        </form>
        <div className='view'>{this.state.value}</div>
      </div>
    )
  }
}

export default App
