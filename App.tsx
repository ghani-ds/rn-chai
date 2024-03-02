import React from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
          <ElevatedCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default App;
