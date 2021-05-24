import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

import DashBoard from './pages/Dashboard';
import Profile from './pages/Profile';


export default (isSigned = false) =>
    createAppContainer(
        createSwitchNavigator(
            {
                Sign: createSwitchNavigator({
                    SignIn,
                    SignUp,
                }),
                App: createBottomTabNavigator({
                    DashBoard,
                    Profile,
                }, {
                    tabBarOptions: {
                        keyboardHidesTabBar: true,
                        activeTintColor: '#FFF',
                        inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
                        style: {
                            backgroundColor: '#8d41a8',
                        },
                    },
                }),
            }, {
            initialRouteName: isSigned ? 'App' : 'Sign'
        }),
    );