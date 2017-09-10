import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import { Button, Card, CardSection, Input, Header } from './common';

class RegistrationForm extends Component {
  state = { username: '', email: '', password: '' };

  onButtonPress() {
    const { username, email, password } = this.state;

    axios.post('http://localhost:3000/api/users', { username, email, password })
      .then(response => {
        console.log(response);
      });
  }

  render() {
    return (
      <View>
        <Header headerText="Register" />
        <Card>
          <CardSection>
            <Input
            placeholder="username"
            label="Username"
            value={this.state.username}
            onChangeText={username => this.setState({ username })}
            />
          </CardSection>

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
              Log in
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

export default RegistrationForm;
