import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import MapScreen from './components/MapScreen';

const App = StackNavigator({
  Login: { screen: LoginForm },
  Map: { screen: MapScreen },
  Register: { screen: RegistrationForm }
});

export default App;
