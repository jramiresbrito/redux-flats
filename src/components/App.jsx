import React, { Component } from 'react';

import FlatList from '../containers/FlatList';
import Map from '../containers/Map';

export default class App extends Component {
  render() {
    return (
      <div className="d-flex">
        <FlatList />
        <Map />
      </div>
    );
  }
}
