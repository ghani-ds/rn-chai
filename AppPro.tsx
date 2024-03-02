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
  },
  lightText: {
    color: '#eb50eb445',
    fontSize: 56,
  },
  darkText: {
    color: '#eb50eb445',
    fontSize: 56,
  },
});

export default AppPro;
