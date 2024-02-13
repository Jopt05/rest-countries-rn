import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons'
import { ThemeContext } from '../context/ThemeContext'

export const Header = () => {

  const { setDarkTheme, setLightTheme, theme } = useContext( ThemeContext );

  const handleChangeTheme = () => {
    console.log(theme.currentTheme)
    if( theme.currentTheme == 'dark' ) {
      setLightTheme();
      return;
    }
    setDarkTheme();
  }

  return (
    <View style={{
      ...styles.mainContainer,
      backgroundColor: theme.inputBackground
    }}>
        <Text style={{
          ...styles.headerTitle,
          color: theme.colors.text
        }}>
            Where in the world?
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={ handleChangeTheme }
        >
          <View style={{
            ...styles.headerIconContainer,
            borderColor: theme.colors.text
          }}>
            <Icon 
              style={ styles.headerIcon }
              size={ 20 }
              name='sunny-outline'
              color={ theme.colors.text }
            />
          </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        paddingVertical: 25,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 3,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    headerIconContainer: {
      height: 35,
      width: 35,
      borderRadius: 1000,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
    },
    headerIcon: {
      
    }
})