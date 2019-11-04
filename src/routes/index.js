import React from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';
import { Icon } from 'native-base';

import { colorNavTint, colorAccent, colorStatusBar, colorBlack, colorWhite } from '../constants/colors';
import CategoryContainer from '../containers/CategoryContainer';
import Images from '../../images/image';

export const tabNavigator = createMaterialTopTabNavigator({
    Dress: { 
      screen: CategoryContainer,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => <Icon source={Images.iconShirts} color={tintColor} />,
      }
     },
    Bedding: { screen: CategoryContainer },
    Accessories: { screen: CategoryContainer }
  }, 
  {
    initialRouteName: 'Dress',
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
        title: 'Laundra',
      },
    },
  });

  export default createAppContainer(App);