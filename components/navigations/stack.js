import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../screens/home';


const Stack = createStackNavigator();

export default function Custom_Stack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}