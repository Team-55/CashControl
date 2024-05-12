import Wallet from "../../pages/Wallet/Wallet";
import AddBank from "../../Component/AddBank/AddBank";
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";

const Stack = createStackNavigator();

export default function WalletScreen() {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Wallet"
        component={Wallet}
        options={{
          headerShown: true,
          header: () => (
            <View style={styles.wallet}>
              <View style={styles.wallet__wrap}>
                <Image source={require('../../icons/pig.png')} />
                <Text style={styles.wallet__title}>Загальний баланс</Text>
              </View>
              <Text style={styles.wallet__sum}>0 ₴</Text>
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="AddBank"
        component={AddBank}
        options={{
          headerShown: true,
          header: () => (<AddBankHeader />),
        }}
      />
    </Stack.Navigator>
  )
}

function AddBankHeader() {
  const navigation = useNavigation();

  const loadBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.bank__wrap}>
      <TouchableOpacity style={styles.bank__back} onPress={loadBack}>
        <Image source={require('../../icons/left.png')} />
      </TouchableOpacity>
      <Text style={styles.bank__title}> Рахунок </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wallet: {
    backgroundColor: '#877AEA',
    height: 145,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 16,
  },
  wallet__wrap: {
    flexDirection: 'row',
    gap: 2,
    alignItems: 'center'
  },
  wallet__title: {
    fontFamily: 'Space Grotesk Bold',
    fontSize: 16,
    color: '#FBFBFD',
    fontWeight: '700',
  },
  wallet__sum: {
    fontSize: 32,
    fontWeight: 500,
    color: '#FBFBFD'
  },
  bank__back: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#8379E3",
    alignItems: 'center',
    justifyContent: 'center'
  },
  bank__wrap: {
    paddingTop: 55,
    height: 100,
    backgroundColor: '#1B1B1D',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    padding: 16
  },
  bank__title: {
    fontStyle: 'Space Grotesk',
    fontWeight: '400',
    fontSize: 24,
    color: '#FBFBFD',
  },
});