/* eslint-disable */

import React from 'react';
import { View, Image } from 'react-native';

import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';


import logo from '~/assets/logo.jpg';

import SignIn from './pages/SignIn';
import ExampleScreen from './pages/EmptyExample';
import PhoneNumberScreen from './pages/SignUp/PhoneNumberScreen';
import SmsVerificationScreen from './pages/SignUp/SmsVerificationScreen';
import PhoneNumberForgotScreen from './pages/ForgotPassword/PhoneNumberScreen';
import SmsVerificationForgotScreen from './pages/ForgotPassword/SmsVerificationScreen';
import UpdateForgotScreen from './pages/ForgotPassword/UpdateForgotScreen';
import FinishScreen from './pages/SignUp/FinishScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUpFlow : {
            screen: createStackNavigator(
              {
                PhoneNumberScreen,
                SmsVerificationScreen,
                FinishScreen,

              },
              {
                defaultNavigationOptions: {
                  headerTransparent: true,
                  headerTintColor: '#15162c',
                  headerLeftContainerStyle: {
                    marginLeft: 20,
                  },
                },
              }
            ),
          },
          ForgotPasswordFlow : {
            screen: createStackNavigator(
              {
                PhoneNumberForgotScreen,
                SmsVerificationForgotScreen,
                UpdateForgotScreen,

              },
              {
                defaultNavigationOptions: {
                  headerTransparent: true,
                  headerTintColor: '#15162c',
                  headerLeftContainerStyle: {
                    marginLeft: 20,
                  },
                },
              }
            ),
          },
        }),

          App: createBottomTabNavigator(
              {
                first: {
                  screen: ExampleScreen,
                  navigationOptions: {
                    tabBarOptions: {
                      activeTintColor: '#4ead93',
                      style: {
                        backgroundColor: '#201D2E',
                      },
                    },
                  tabBarIcon: ({ tintColor }) => (
                        <Icon name="smartphone" size={20} color={tintColor} />
                      ),
                  },
                },
                middle: {
                  screen: ExampleScreen,
                  navigationOptions: {
                    tabBarOptions: {
                      activeTintColor: '#4ead93',
                      style: {
                        backgroundColor: '#201D2E',
                      },
                    },
                    tabBarLabel: ' ',
                    tabBarIcon: ({ tintColor }) => (
                      <View
                        style={{
                          position: 'absolute',
                          bottom: 1, // space from bottombar
                          height: 65,
                          width: 65,
                          borderRadius: 65,
                          backgroundColor: '#130f42',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      >

                                                        <Image
                                  source={logo}
                                  style={{
                                    width: 39,
                                    height: 39,
                                    alignContent: 'center',
                                  }}
                                />
                      </View>
                    ),
                  },
                },
                last: {
                  screen: ExampleScreen,
                  navigationOptions: {
                    tabBarOptions: {
                      activeTintColor: '#4ead93',
                      style: {
                        backgroundColor: '#201D2E',
                      },
                    },
                    tabBarIcon: ({ tintColor }) => (
                      <Icon name="smartphone" size={20} color={tintColor} />
                    ),
                  },
                },
              },
              {
                initialRouteName: 'middle',
              }
            ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
