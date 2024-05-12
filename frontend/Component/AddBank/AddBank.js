import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, SafeAreaView, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default function AddBank() {
  const handleTapOutside = () => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.bank}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={handleTapOutside}>
          <View style={styles.bank__wrap}>
            <TextInput
              style={styles.input}
              placeholder="Назва рахунку"
              placeholderTextColor="#A9A9A9"
            />

            <TextInput
              style={styles.input}
              keyboardType='number'
              placeholder="Поточний баланс"
              placeholderTextColor="#A9A9A9"
            />

            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Oстанні 4 цифри карти"
              placeholderTextColor="#A9A9A9"
            />

            <Text style={styles.banks__card__title}>Значок рахунку</Text>

            <View style={styles.bank__wrap__icons}>
              <View style={styles.bank__icon}>
                <Image source={require('../../icons/mono__big.png')} />
                <Text style={styles.bank__name}> Monobank </Text>
              </View>

              <View style={styles.bank__icon}>
                <Image source={require('../../icons/privat__big.png')} />
                <Text style={styles.bank__name}> Privat24 </Text>
              </View>

              <View style={styles.bank__icon}>
                <Image source={require('../../icons/oshchad__big.png')} />
                <Text style={styles.bank__name}> Ощадбанк </Text>
              </View>

              <View style={styles.bank__icon}>
                <Image source={require('../../icons/pumb__big.png')} />
                <Text style={styles.bank__name}> Пумб </Text>
              </View>

              <View style={styles.bank__icon}>
                <Image source={require('../../icons/sence__big.png')} />
                <Text style={styles.bank__name}> Sense </Text>
              </View>

              <View style={styles.bank__icon}>
                <Image source={require('../../icons/izi__big.png')} />
                <Text style={styles.bank__name}> Izi </Text>
              </View>

              <View style={styles.bank__icon}>
                <Image source={require('../../icons/raiffeisen__big.png')} />
                <Text style={styles.bank__name}> Raiffeisen </Text>
              </View>

              <View style={styles.bank__icon__add}>
                <Image source={require('../../icons/plus__purple.png')} />
              </View>
            </View>

            <TouchableOpacity style={styles.bank__submit}>
              <Text style={styles.bank__submit__text}>Додати рахунок</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16
  },
  bank: {
    paddingTop: 24,
    height: windowHeight - 100,
    backgroundColor: '#1B1B1D',
  },
  bank__wrap: {
    height: '100%',
    position: 'relative',
    paddingTop: 24,
  },

  input: {
    width: windowWidth - 32,
    height: 48,
    borderRadius: 60,
    backgroundColor: '#212529',
    marginBottom: 16,
    paddingLeft: 16,
    color: '#FBFBFD',
    fontStyle: 'Space Grotesk',
    fontWeight: '400',
    fontSize: 16,
  },
  bank__submit: {
    position: 'absolute',
    width: windowWidth - 32,
    bottom: 110,
    height: 48,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8379E3',
  },
  bank__submit__text: {
    color: '#FBFBFD',
    fontStyle: 'Space Grotesk',
    fontWeight: '400',
    fontSize: 16,
  },
  banks__card__title: {
    fontFamily: 'Space Grotesk Bold',
    fontWeight: '700',
    fontSize: 16,
    color: '#FBFBFD',
    marginBottom: 16,
  },
  bank__wrap__icons: {
    padding: 16,
    backgroundColor: '#212529',
    borderRadius: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 24,
    marginBottom: 24,
  },
  bank__icon: {
    width: '25%',
    gap: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bank__name: {
    fontFamily: 'Space Grotesk Bold',
    fontWeight: '400',
    fontSize: 14,
    color: '#FBFBFD',
  },
  bank__icon__add: {
    height: 48,
    width: 48,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#8379E3',
    borderStyle: 'solid',
    borderWidth: 1,
  },
});