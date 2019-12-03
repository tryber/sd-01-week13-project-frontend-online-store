import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="input-div">
          <form>
            <input className="input-search" type="text" value="" />
          </form>
        </div>
        {/* <h3 className='text-primary'>{this.state.value}</h3> */}
      </div>
    );
  }
}

export default SearchBar;
