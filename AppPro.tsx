import React from 'react';
import {View, useColorScheme, StyleSheet, Text} from 'react-native';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.lightText : styles.darkText}>
        React Native
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightText: {
    color: '#fff',
    fontSize: 18,
  },
  darkText: {
    color: '#9d1212',
    fontSize: 18,
  },
});

export default AppPro;
