import React, { Component } from 'react';
import { Button, Card, CardSection, Input, Text } from './common';
import axios from 'axios';

class LoginForm extends Component {
  state = { email: '', password: '', error: '' };

  onButtonPress() {
    const { email, password } = this.state;

    axios.post('/user', { email: email, password: password})
      .then(function(response) {
        console.log(response);
      });
  }

  render() {
    return (
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

        <Text style={styles.errorTextStyle}>
          {this.state.error}
        </Text>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Log in
          </Button>
        </CardSection>
      </Card>
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
