import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../theme/appTheme'

export const Header = () => {
  return (
    <View style={ styles.mainContainer }>
        <Text style={ styles.headerTitle }>
            Where in the world?
        </Text>
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
    }
})