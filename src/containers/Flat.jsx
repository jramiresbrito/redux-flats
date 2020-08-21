/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFlat } from '../actions';

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.flat);
  };

  render() {
    const { flat, selectedFlat } = this.props;
    const style = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${flat.imageUrl})`,
    };

    return (
      <div
        className={`card${flat === selectedFlat ? ' active' : ''}`}
        style={style}
      >
        <div className="card-category">
          {flat.price} {flat.priceCurrency}
        </div>
        <div className="card-description">
          <h2>{flat.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectFlat }, dispatch);
}

function mapReduxStateToProps(reduxState) {
  return {
    selectedFlat: reduxState.selectedFlat,
  };
}

export default connect(mapReduxStateToProps, mapDispatchToProps)(Flat);
