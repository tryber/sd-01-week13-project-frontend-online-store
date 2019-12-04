import React from 'react';

class SearchBar extends React.Component {

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.props.onChange(event);
    }
  }

  render() {
    return (
      <div className="search-box">
        <input type="text" onKeyPress={(e) => this.handleKeyPress(e)}/>
      </div>
    );
  };
}

export default SearchBar;