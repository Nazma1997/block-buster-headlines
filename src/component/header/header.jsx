import React, { Component } from 'react'
import {newsCategory} from '../../news/index';
class Header extends Component {
  state={
    searchTerm: ''
  }

  handleChange = event => {

  }

  handleKeypress = event => {

  }

  render() {
    return (
      <div className='my-4'>
        <h1 className='mb-4' style={{fontWeight: '300'}}>Block Buster Headlines</h1>
        <input
           type="search"
           className='form-control'
           placeholder='Type Anything & Press Enter To Search'
           value={this.state.searchTerm}
           onChange={this.handleChange}
           onKeyPress={this.handleKeypress} 
        />
      </div>
    )
  }
}

export default Header