import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import { Card, CardSection, Button, Input } from './common';

class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map',
  }

  constructor(props) {
    super();
    this.state = {
      accessToken: props.navigation.state.params.accessToken,
      search: '',
      location: '',
    };
  }

  yelpSearch() {
    const { search, location } = this.state;

    axios({
      method: 'get',
      url: `https://api.yelp.com/v3/businesses/search?term=${search}&location=${location}&limit=3`,
      headers: { authorization: 'Bearer wtE8XDeiJULwkLUzO5z8_ZCGuMvnOMwVojZfWDTEXAAq5w5DqT7aF294pBuDY7SaKAjk7fSORTo0gjR4XiUhr2vBYJL4IPScLJffkvslOfuCp60CQbUTUEyzrv2xWXYx' }
    })
    .then(response => {
      console.log(response.data);
    });
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
            placeholder="food, gas, etc."
            label="Search"
            value={this.state.search}
            onChangeText={search => this.setState({ search })}
            />
          </CardSection>

          <CardSection>
            <Input
            placeholder="123 Awesome St, Cooltown, CA"
            label="Location"
            value={this.state.location}
            onChangeText={location => this.setState({ location })}
            />
          </CardSection>

          <CardSection>
            <Button onPress={this.yelpSearch}>
              Search
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

  export default MapScreen;
