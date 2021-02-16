import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import FaceBookScreen from './screens/fb';
import InstagramScreen from './screens/insta';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
    );
  }
}

const tabNavigator=createBottomTabNavigator({
  FaceBook:{screen:FaceBookScreen},
  Instagram:{screen:InstagramScreen}
})

const AppContainer = createAppContainer(tabNavigator)


