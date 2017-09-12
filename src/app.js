import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import MapScreen from './components/MapScreen';
import Map from './components/Map';
import React from 'react';

const App = StackNavigator({
  Login: { screen: LoginForm },
  Map: { screen: Map },
  Register: { screen: RegistrationForm }
});

export default App;
