import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setFlats } from '../actions/index';

import Flat from './Flat';

class FlatList extends Component {
  UNSAFE_componentWillMount() {
    this.props.setFlats();
  }

  render() {
    const { flats } = this.props;
    return (
      <div className="col-sm-7 flat-list">
        {flats.map((flat) => {
          return <Flat flat={flat} key={flat.name} />;
        })}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setFlats }, dispatch);
}

function mapReduxStateToProps(reduxState) {
  return {
    flats: reduxState.flats,
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(FlatList);
