import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { HistoryScreen } from './History.screen';
import { HomeScreen } from './Home.screen';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: React.FC = () => {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen component={HomeScreen} name="Home" />
      <BottomTabs.Screen component={HistoryScreen} name="History" />
    </BottomTabs.Navigator>
  );
};
