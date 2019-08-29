/* eslint-disable no-underscore-dangle */
import { NavigationActions } from 'react-navigation';

let _container;
let _currentScreen;
let _switchNavigation;

export function setContainer(container) {
    _container = container;
}

export function setSwitchNavRef(ref) {
    _switchNavigation = ref;
}

export function navigate(routeName, params = null) {
    _container.dispatch(
        NavigationActions.navigate({
            routeName,
            params,
        }),
    );
}

export function goBack() {
    _container.dispatch(NavigationActions.back());
}

export function resetToLogin() {
    _switchNavigation.navigate('App');
}

export function reset(routeName, params) {
    _container.dispatch(
        NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName,
                    params,
                }),
            ],
        }),
    );
}

function getActiveRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getActiveRouteName(route);
    }
    return route.routeName;
}

export function onNavigationStateChange(prevState, currentState) {
    const currentScreen = getActiveRouteName(currentState);
    const prevScreen = getActiveRouteName(prevState);

    if (prevScreen !== currentScreen) {
        _currentScreen = currentScreen;
    }
}
