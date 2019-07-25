import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';

import { colorNavTint } from '../constants/colors';
import CategoryContainer from '../containers/CategoryContainer';

export const tabNavigator = createMaterialTopTabNavigator({
    Dress: { screen: CategoryContainer },
  }, {
    initialRouteName: 'Dress',
    activeTintColor: colorNavTint,
  });

  export default createAppContainer(tabNavigator);