import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import axios from 'axios';
import Detay from './Detay';


class Liste extends Component {
  state = { data: [] };
  componentDidMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ data: response.data }));
  }

  renderData() {
    return this.state.data.map((responseData, Id) =>
    <Detay key={Id} data={responseData} />
  );
  }

  render() {
    console.log('gelen data ' + this.state);
    console.log('render');
    return (
      <ScrollView style={{ marginTop: 5 }}>
        {this.renderData()}
      </ScrollView>
    );
  }
}

export default Liste;