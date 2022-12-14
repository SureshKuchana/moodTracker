import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MoodPicker } from '../components/MoodPicker';

export const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>How are right now?</Text>
      <MoodPicker />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
