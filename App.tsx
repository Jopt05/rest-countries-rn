import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { ThemeProvider } from './src/context/ThemeContext';


export const App = () => {
  return (
    <AppState>
      <StackNavigator />
    </AppState>
  )
}

const AppState = ({ children }: any) => {
  return (
    <ThemeProvider>
      { children }
    </ThemeProvider>
  )
}

export default App;