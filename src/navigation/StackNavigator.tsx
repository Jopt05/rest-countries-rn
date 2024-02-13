import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DetailsScreen';
import { Country } from '../interfaces/Country';
import { NavigationContainer } from '@react-navigation/native';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailsScreen: {
    countryName: string;
  };
}

const Stack = createStackNavigator<RootStackParams>();

export default function StackNavigator() {

  const { theme } = useContext( ThemeContext );

  return (
    <NavigationContainer
      theme={ theme }
    >
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