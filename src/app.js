import { StackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';

const App = StackNavigator({
  Login: { screen: LoginForm },
  Register: { screen: RegistrationForm }
});

export default App;
