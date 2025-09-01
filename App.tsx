import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import symbolOn from './assets/pictures/symbol-on.png';
import symbolOff from './assets/pictures/symbol-off.png';

export default function App() {
    const [isActive, setisActive] = useState(false);

  function handleSymbol() {
    setisActive(!isActive);
    console.log(isActive);

  }
    
  return (
    <View style={isActive ? styles.isOn : styles.isOff}>
      <TouchableOpacity onPress={() => handleSymbol()}>
        <Image source={isActive ? symbolOn : symbolOff}/>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  isOn: {
    flex: 1,
    backgroundColor: '#131b23',
    alignItems: 'center',
    justifyContent: 'center',
  },
  isOff: {
    flex: 1,
    backgroundColor: '#E9F1F7',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
