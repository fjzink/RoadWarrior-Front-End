import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import { Button, Card, CardSection, Input, Header } from './common';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      passsword: '',
    };

    this.onButtonPress = this.onButtonPress.bind(this);
  }


  static navigationOptions = {
    title: 'Login'
  }

  onButtonPress() {
    const { email, password } = this.state;

    axios.post('http://localhost:3000/api/login', { email, password })
      .then(response => {
        console.log(response.data);
      })
      .then(this.props.navigation.navigate('Map', {}))
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
            <Button onPress={this.onButtonPress}>
              Login
            </Button>
          </CardSection>

          <CardSection>
            <Button
                onPress={() => navigate('Register', { butts: 'butts'})} >
              Register now.
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
