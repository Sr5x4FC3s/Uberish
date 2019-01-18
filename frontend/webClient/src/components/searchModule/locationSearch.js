import React from 'react';

export default class LocationSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  search() {
    //API request with search 
  }

  render() {
    console.log(this.props)
    return (
      <div>Let's search for some locations yo!</div>
    )
  }
};