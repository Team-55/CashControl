import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
export default function NavBar() {
  return (
    <View style={styles.nav}>
      <View style={styles.nav__wrap}>
        <Image source={require('../../icons/accounts.png')} />
        <Text style={styles.nav__title}> Рахунки </Text>
      </View>
      <View style={styles.nav__wrap}>
        <Image source={require('../../icons/operation.png')} />
        <Text style={styles.nav__title}> Операції </Text>
      </View>
      <View style={styles.nav__wrap}>
        <Image source={require('../../icons/plans.png')} />
        <Text style={styles.nav__title}> Плани </Text>
      </View>
      <View style={styles.nav__wrap}>
        <Image source={require('../../icons/overview.png')} />
        <Text style={styles.nav__title}> Огляд </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  nav: {
    position: 'absolute',
    bottom: 0,
    width: windowWidth,
    flexDirection: 'row',
    height: 110,
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 8,
    borderTopColor: '#D7D2FC',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  nav__wrap: {
    height: 42,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nav__title: {
    fontStyle: 'Space Grotesk Regural',
    fontWeight: '400',
    fontSize: 14,
    color: '#FBFBFD',
  }
});