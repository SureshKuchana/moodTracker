import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const moodOptions = [
  { emoji: '🧑‍💻', description: 'studious' },
  { emoji: '🤔', description: 'pensive' },
  { emoji: '😊', description: 'happy' },
  { emoji: '🥳', description: 'celebratory' },
  { emoji: '😤', description: 'frustrated' },
];

export const MoodPicker: React.FC = () => {
  return (
    <View style={styles.moodOptions}>
      {moodOptions.map((item, i) => {
        return <Text key={i}>{item.emoji}</Text>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  moodOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
});
