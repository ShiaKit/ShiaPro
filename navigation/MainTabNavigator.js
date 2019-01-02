import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Colors from '../constants/Colors';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import QuranScreen from '../screens/QuranScreen';
import RecitationsScreen from '../screens/RecitationsScreen';
import CommunityScreen from '../screens/CommunityScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-home'}
    />
  ),
};

const CalendarStack = createStackNavigator({
  Calendar: CalendarScreen,
});

CalendarStack.navigationOptions = {
  tabBarLabel: 'Calendar',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-calendar' : 'md-calendar'}
    />
  ),
};

const QuranStack = createStackNavigator({
  Quran: QuranScreen,
});

QuranStack.navigationOptions = {
  tabBarLabel: 'Qur\'an',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const RecitationsStack = createStackNavigator({
  Recitations: RecitationsScreen,
});

RecitationsStack.navigationOptions = {
  tabBarLabel: 'Recitations',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

const CommunityStack = createStackNavigator({
  Community: CommunityScreen,
});

CommunityStack.navigationOptions = {
  tabBarLabel: 'Community',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  CalendarStack,
  QuranStack,
  RecitationsStack,
  CommunityStack
}, {
  tabBarOptions: {
    style: {
      backgroundColor: Colors.tabBar
    }
  }
});
