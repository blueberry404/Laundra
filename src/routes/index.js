import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import { colorNavTint, colorAccent, colorNavBar, colorStatusBar } from '../constants/colors';
import CategoryContainer from '../containers/CategoryContainer';

export const tabNavigator = createMaterialTopTabNavigator({
    Tops: { screen: CategoryContainer },
    Bedding: { screen: CategoryContainer },
    Suits: { screen: CategoryContainer },
    Trousers: { screen: CategoryContainer },
    Accessories: { screen: CategoryContainer },
  }, 
  {
    initialRouteName: 'Tops',
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: colorStatusBar,
      inactiveTintColor: '#FFFFFF',
      style: {
        backgroundColor: colorAccent,
      },
      labelStyle: {
        textAlign: 'center',
        color: 'white',
      },
      indicatorStyle: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
      },
      showIcon: true
    },
  });

  const App = createStackNavigator({
    TabScreen: {
      screen: tabNavigator,
      navigationOptions: {
        headerStyle: {
          backgroundColor: colorNavTint,
        },
        headerTintColor: '#FFFFFF',
        title: 'TabExample',
      },
    },
  });

  export default createAppContainer(App);