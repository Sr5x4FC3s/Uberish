import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LoginInput from './loginInput';
import { user } from '../../redux/actions/index';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    user: user,
  }, dispatch)
}

class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <LoginInput state={this.props} />
      </div>
    )
  }
}

// export default Login;
export default connect(mapStateToProps)(Login)
