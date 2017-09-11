import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import MapScreen from './components/MapScreen';
import React from 'react';

const App = StackNavigator({
  Login: { screen: LoginForm },
  Map: { screen: MapScreen },
  Register: { screen: RegistrationForm }
});

<App 
  screenProps={{access_token: '¯\_(ツ)_/¯'}}
/>

export default App;
