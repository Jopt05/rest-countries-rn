import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DetailsScreen';
import { Country } from '../interfaces/Country';
import { NavigationContainer } from '@react-navigation/native';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailsScreen: {
    countryName: string;
  };
}

const Stack = createStackNavigator<RootStackParams>();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}