import {StyleSheet, View, Text } from 'react-native';
import React from 'react';
import {MaterialIcons} from '@expo/vector-icons';

export default function Header() {
  return (
    <View styles={styles.header}>
      {/* Icons */}
      <View>
        <Text style={styles.headerText}>Events</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    width: '100%',
    height: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: '1'
  }
});
