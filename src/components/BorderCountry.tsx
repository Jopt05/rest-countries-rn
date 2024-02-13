import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { colors, globalStyles } from '../theme/appTheme'
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/ThemeContext';

interface BorderCountriesProps {
  countriesList: string[];
}

export const BorderCountries = ({ countriesList }: BorderCountriesProps) => {

    const { theme } = useContext( ThemeContext );

    const navigation = useNavigation();
  
    const renderItem = (item: string) => (
        <TouchableOpacity 
          style={{
            ...styles.button,
            ...globalStyles.shortHorizontalMargin,
            ...globalStyles.shadowButton,
            backgroundColor: theme.inputBackground
          }}
          onPress={ () => navigation.navigate('DetailsScreen', { countryName: item }) }
        >
            <Text style={{
              ...styles.buttonText,
              color: theme.colors.text
            }}>
                { item }
            </Text>
        </TouchableOpacity>
    )

  return (
    <View style={ globalStyles.shortHorizontalMargin }>
        <Text style={{
          ...styles.subtitle,
          color: theme.colors.text
        }}>
            Border Countries
        </Text>
        <FlatList 
            contentContainerStyle={{
                paddingVertical: 5
            }}
            showsHorizontalScrollIndicator={false}
            style={ styles.list }
            horizontal={ true }
            data={ countriesList }
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