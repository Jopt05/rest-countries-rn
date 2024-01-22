import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, globalStyles } from '../theme/appTheme'
import { Header } from '../components/Header'
import Icon from 'react-native-vector-icons/Ionicons'
import { DescriptionRow } from '../components/DescriptionRow'
import { BorderCountries } from '../components/BorderCountry'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigation/StackNavigator'

interface DetailsScreenProps extends StackScreenProps<RootStackParams, 'DetailsScreen'> {};

export const DetailsScreen = ({ navigation, route }: DetailsScreenProps) => {

  const params = route.params;

  return (
    <View style={ styles.mainContainer }>
        <Header /> 
        <ScrollView>
            <TouchableOpacity style={[
                styles.backButtonContainer,
                globalStyles.shortHorizontalMargin,
                globalStyles.shadowButton
            ]}>
                <Icon 
                    style={ styles.icon }
                    name='arrow-back-outline'
                    color={ colors.darkBlue }
                    size={ 20 }
                />
                <Text style={ styles.buttonText }>
                    Back
                </Text>
            </TouchableOpacity>

            <View style={[
                globalStyles.shortHorizontalMargin
            ]}>
                <View style={ styles.imageContainer }>

                </View>

                <Text style={ styles.title }>
                    Belgium
                </Text>
                <DescriptionRow 
                    title='Region:'
                    value='81,770,900'
                    isSmall={false}
                />
            </View>

            <BorderCountries />
        </ScrollView>  
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.veryLightGray
  },
  backButtonContainer: {
    flexDirection: 'row',
    marginTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 40
  },
  icon: {
    marginRight: 10
  },
  buttonText: {
    fontSize: 20,
    color: colors.darkBlue
  },
  imageContainer: {
    width: '100%',
    height: 300,
    backgroundColor: 'red',
    marginBottom: 30,
  },
  title: {
    fontSize: 26,
    color: colors.darkBlue,
    fontWeight: 'bold',
    marginBottom: 20
  }
})
