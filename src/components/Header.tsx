import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons'

export const Header = () => {
  return (
    <View style={ styles.mainContainer }>
        <Text style={ styles.headerTitle }>
            Where in the world?
        </Text>
        <View style={ styles.headerIconContainer }>
          <Icon 
            style={ styles.headerIcon }
            size={ 20 }
            name='sunny-outline'
            color={ 'black' }
          />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: colors.white,
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
        fontWeight: 'bold',
        color: colors.darkBlue
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