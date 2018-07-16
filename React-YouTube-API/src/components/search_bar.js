import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    console.log('input changed')
    this.state = { term: '' };
  }

  render() {
    return (
      <input onChange={ this.onInputChange } />
    );
  }

  onInputChange(event){
    console.log(event.target.value)
  }
}

export default SearchBar;
