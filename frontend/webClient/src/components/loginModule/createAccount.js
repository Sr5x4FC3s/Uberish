import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { user } from '../../redux/actions/index';
import AccountInformation from './accountInformation';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    user: user,
  }, dispatch)
};

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AccountInformation state={this.props}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);