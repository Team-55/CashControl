import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './WalletStyle.js';
import { LinearGradient } from 'expo-linear-gradient';

export default function Wallet({ navigation }) {

  const loadScene = () => {
    navigation.navigate("AddBank");
  };

  return (
    <>
      <View style={styles.wallet}>
        <View style={styles.container}>
          <View style={styles.banks}>
            <Text style={styles.banks__title}>Банки</Text>

            <View style={styles.banks__wrap}>
              <LinearGradient
                colors={['#A18CD1', '#FBC2EB']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.banks__card}
              >
                <View style={styles.banks__card__icons}>
                  <Image
                    source={require('../../icons/mono.png')}
                    style={styles.banks__card__logo}
                  />
                  <Image source={require('../../icons/close.png')} />
                </View>

                <Text style={styles.banks__card__title}>Монобанк</Text>
                <Text style={styles.banks__card__numb}>4477</Text>
              </LinearGradient>

              <TouchableOpacity style={styles.banks__new_card} onPress={loadScene}>
                <Image source={require('../../icons/whitePlus.png')} style={styles.banks__card__plus} />
                <Text style={styles.banks__new_card__title}>Додати карту</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.accounts__title}>Курс валют</Text>

          <View style={styles.currency}>
            <View style={styles.currency__wrap}>
              <Image
                source={require('../../icons/usd.png')}
                style={styles.currency__logo}
              />
              <View>
                <Text style={styles.currency__title}>Долар</Text>
                <Text style={styles.currency__text}>39.45 / 39.83</Text>
              </View>
            </View>

            <View style={styles.currency__wrap}>
              <Image
                source={require('../../icons/eur.png')}
                style={styles.currency__logo}
              />
              <View>
                <Text style={styles.currency__title}>Євро</Text>
                <Text style={styles.currency__text}>42.20 / 42.83</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.accounts__title}>Картки і рахунки</Text>

          <View style={styles.accounts__wrap}>
            <View style={styles.accounts__card}>
              <View style={styles.accounts__card__wrap}>
                <Image
                  source={require('../../icons/mono.png')}
                  style={styles.banks__card__logo}
                />

                <Text style={styles.accounts__card__name}>Монобанк</Text>
              </View>

              <Text style={styles.accounts__card__sum}>0₴</Text>
            </View>

            <View style={styles.accounts__card}>
              <View style={styles.accounts__card__wrap}>
                <Image
                  source={require('../../icons/wallet.png')}
                  style={styles.banks__card__logo}
                />

                <Text style={styles.accounts__card__name}>Готівка</Text>
              </View>

              <Text style={styles.accounts__card__sum}>0₴</Text>
            </View>
          </View>
        </View>

        <View style={styles.plus}>
          <Image source={require('../../icons/whitePlus.png')} />
        </View>
      </View>
    </>
  );
}