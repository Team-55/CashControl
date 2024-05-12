import { createStackNavigator } from '@react-navigation/stack';
import Plans from '../../pages/Plans/Plans';

const Stack = createStackNavigator();

export default function WalletScreen() {

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false
        }}
        name="Plans"
        component={Plans}
      />
    </Stack.Navigator>
  )
}