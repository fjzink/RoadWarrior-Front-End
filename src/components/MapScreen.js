import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, CardSection } from './common';

class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map',
  }

  render() {
    const { navigate } = this.props.navigation;

    return (

      <View>
        <Card>
          <CardSection>
            <Text>MaaaaaaAP</Text>
          </CardSection>

          <CardSection>
            <Button onPress={() => navigate('Login')}>
              Login
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={() => navigate('Register')}>
              Register
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}

  export default MapScreen;