import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection } from './common';

class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map',
  }

  constructor(props) {
    super();
    this.state = {
      accessToken: props.navigation.state.params.accessToken
    };
  }

  render() {
    return (

      <View>
        <Card>
          <CardSection>
            <Text>MaaaaaaAP</Text>
          </CardSection>
        </Card>
      </View>
    );
  }
}

  export default MapScreen;
