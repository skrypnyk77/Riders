import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import MainPage from '../screens/MainPage';
import RiderPage from '../screens/RiderPage';

const screens = {
  Main: {
    screen: MainPage,
    title: 'Riders',
  },
  Rider: {
    screen: RiderPage,
    navigationOptions: {
      title: 'Rider Detail',
    },
  },
};

const mainStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#e3e3e3',
    },
  },
});
export default createAppContainer(mainStack);
