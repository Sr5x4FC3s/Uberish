import React from 'react';

export default class AccountInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props)
    return (
      <div>Account Information Form Area</div>
    )
  }
};