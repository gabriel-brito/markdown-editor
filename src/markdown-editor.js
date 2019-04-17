'use strict'

import React, { PropTypes } from 'react'

const MarkdownEditor = ({ value, handleChange }) => (
  <div className='editor'>
    <textarea value={value} onChange={handleChange}/>
    <div className='view'>{value}</div>
  </div>
)

MarkdownEditor.propTypes = {
  value: PropTypes.any,
  handleChange: PropTypes.func.isRequired
}

export default MarkdownEditor
