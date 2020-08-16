import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import mainStack from './mainStack';

const RootDrawerNavigator = createDrawerNavigator({
  Main: {
    screen: mainStack,
  },
});

export default createAppContainer(RootDrawerNavigator);
