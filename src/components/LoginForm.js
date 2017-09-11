import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import { Button, Card, CardSection, Input, Header } from './common';

class LoginForm extends Component {
  static navigationOptions = {
    title: 'Login'
  }

  state = { email: '', password: '' };

  onButtonPress() {
    const { email, password } = this.state;

    axios.post('http://localhost:3000/api/login', { email, password })
      .then(response => {
        console.log(response);
      })
      .then(this.props.navigation.navigate('Map'))
      .catch(error => console.log(error));
  }

  render() {
    const { navigate } = this.props.navigation;


    return (
      <View>
        <Card>
          <CardSection>
            <Input
            placeholder="user@email.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            />
          </CardSection>

          <CardSection>
            <Input
            secureTextEntry
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            />
          </CardSection>

          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Login
            </Button>
          </CardSection>

          <CardSection>
            <Button
                onPress={() => navigate('Register')}
            >
               Not logged in? Register ;)
            </Button>
          </CardSection>

        </Card>
      </View>
    );
  }
}


const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
