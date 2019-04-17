'use strict'

import React, { Component } from 'react'
import MarkdownEditor from './markdown-editor'
import marked from 'marked'
import hljs from 'highlight.js'
import './css/style.css'

marked.setOptions({
  highlight: (code) => {
    return hljs.highlightAuto(code).value
  }
})

class App extends Component {
  constructor() {
    super()

    this.handleChange = (e) => this.setState({value: e.target.value})

    this.state = {
      value: ''
    }

    this.getMarkup = () => ({__html: marked(this.state.value)})
  }

  render() {
    return (
      <MarkdownEditor
        value={this.state.value}
        handleChange={this.handleChange}
        getMarkup={this.getMarkup}
      />
    )
  }
}

export default App
