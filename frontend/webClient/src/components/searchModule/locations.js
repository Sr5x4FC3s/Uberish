import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { user } from '../../redux/actions/index';
import LocationSearch from './locationSearch';

const mapStateToProps = state => {
  return { status: state.status };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    user: user,
  }, dispatch)
};

class Locations extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <LocationSearch state={this.props} />
      </div>
    )
  }
}
export default connect()(Locations);