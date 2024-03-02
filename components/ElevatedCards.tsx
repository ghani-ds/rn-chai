import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
export default function ElevatedCards() {
  const colors = [
    '#EF5354',
    '#50DBB4',
    '#5DA3FA',
    '#FFD24D',
    '#FFA36C',
    '#B47BFF',
    '#008080',
    '#E6E6FA',
    '#FFC0CB',
    '#FFFFF0',
    '#FFDAB9',
  ];

  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          {colors.map((tone, index) => {
            return (
              <View
                key={index}
                style={[
                  styles.card,
                  styles.cardElevated,
                  {backgroundColor: tone},
                ]}>
                <Text>{tone}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row-reverse',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 8,
    marginHorizontal: 12,
    marginVertical: 8,
  },

  cardElevated: {
    elevation: 10,
    shadowOffset: {
      width: 0.2,
      height: 0.4,
    },
    shadowColor: '#333',
  },
});
