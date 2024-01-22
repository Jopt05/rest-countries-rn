import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { colors, globalStyles } from '../theme/appTheme'

const data = [1,2,3,4,5]

export const BorderCountries = () => {

    const renderItem = (item: any) => (
        <TouchableOpacity style={[
            styles.button,
            globalStyles.shortHorizontalMargin,
            globalStyles.shadowButton
        ]}>
            <Text style={ styles.buttonText }>
                France
            </Text>
        </TouchableOpacity>
    )

  return (
    <View style={ globalStyles.shortHorizontalMargin }>
        <Text style={ styles.subtitle }>
            Border Countries
        </Text>
        <FlatList 
            contentContainerStyle={{
                paddingVertical: 5
            }}
            showsHorizontalScrollIndicator={false}
            style={ styles.list }
            horizontal={ true }
            data={ data }
            renderItem={ ({ item }) =>  renderItem(item)}
            keyExtractor={ (item) => item.toString()}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  subtitle: { 
    fontSize: 24, 
    color: colors.darkBlue,
    fontWeight: 'bold',
    marginTop: 50
  },
  list: {
    paddingVertical: 15,
    marginBottom: 200
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    borderRadius: 5,
    marginRight: 1
  },
  buttonText: {
    fontSize: 20,
    color: colors.darkBlue
  },
})