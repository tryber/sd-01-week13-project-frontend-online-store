import React from 'react';

class SearchBar extends React.Component {

  // handleKeyPress = (event) => {
  //   if (event.key === 'Enter') {
  //     this.requestAPI(event);
  //   }
  // }

  render() {
    return (
      <div className="search-box">
        <input type="text" onChange={(e) => this.props.onChange(e)}/>
      </div>
    );
  };
}

export default SearchBar;
