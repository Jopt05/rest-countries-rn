import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, globalStyles } from '../theme/appTheme'
import { Header } from '../components/Header'
import Icon from 'react-native-vector-icons/Ionicons'
import { DescriptionRow } from '../components/DescriptionRow'
import { BorderCountries } from '../components/BorderCountry'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigation/StackNavigator'
import { Country } from '../interfaces/Country';
import { getCountriesByAlpha3Code, getCountryByAlpha3Code, getCountryByName } from '../utils/countriesService';
import  CurrencyFormater from 'currency-formatter';

const countrykeys = {
  'nativeName': 'Native Name',
  'population': 'Population',
  'region': 'Region',
  'subregion': 'Sub Region',
  'capital': 'Capital',
  'topLevelDomain': 'Top Level Domain',
  'currencies': 'Currencies',
  'languages': 'Languages'
}

interface DetailsScreenProps extends StackScreenProps<RootStackParams, 'DetailsScreen'> {};

export const DetailsScreen = ({ navigation, route }: DetailsScreenProps) => {

  const { countryName } = route.params;

  const [isLoading, setIsLoading] = useState(true);
  const [countryInfo, setCountryInfo] = useState<Country>();
  const [listOfBorderCountries, setListOfBorderCountries] = useState<string[]>([]);
  const [isLoadingBorder, setIsLoadingBorder] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setIsLoadingBorder(true);
    setListOfBorderCountries([]);
    getCountryByName(countryName)
      .then(response => {
        setCountryInfo(response);
        setIsLoading(false);
      })
  }, [countryName])

  useEffect(() => {
    if( !countryInfo ) return;
    if( !countryInfo.borders ) {
      setIsLoadingBorder(false);
      return;
    };
    const listOfAlpha3Codes = countryInfo.borders;
    getCountriesByAlpha3Code(listOfAlpha3Codes)
      .then(response => {
        if( response ) {
          const listOfNames = response.map(country => country.name);
          setListOfBorderCountries([...listOfNames]);
          setIsLoadingBorder(false);
        }
      })
  }, [countryInfo])

  return (
    <View style={ styles.mainContainer }>
        <Header /> 
        <ScrollView>
            <TouchableOpacity 
              style={[
                styles.backButtonContainer,
                globalStyles.shortHorizontalMargin,
                globalStyles.shadowButton
              ]}
              onPress={ () => navigation.goBack() }
            >
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
                  {
                    countryInfo && !isLoading
                      ? <Image style={ styles.image } source={{ uri: countryInfo.flags.png }} />
                      : <ActivityIndicator size={50} />
                  }
                </View>

                <Text style={ styles.title }>
                    { countryName }
                </Text>

                {
                  isLoading && (
                    <View style={ styles.loadingContainer }>
                      <ActivityIndicator size={50}/>
                    </View>
                  )
                }

                {
                  !isLoading && countryInfo && Object.entries(countrykeys).map((tuple, index) => {
                    const keyOfCountry = tuple[0] as keyof Country;
                    const fieldName = tuple[1] + ':';
                    const valueOfCountry = countryInfo[keyOfCountry];
                    const hasSpace = (index == 4);
                    if ( typeof valueOfCountry == 'string' ) return (
                      <DescriptionRow 
                        title={fieldName}
                        value={ valueOfCountry.toString() }
                        isSmall={false}
                        key={index}
                        hasSpace={hasSpace}
                      /> 
                    )

                    if ( typeof valueOfCountry == 'number' ) return (
                      <DescriptionRow 
                        title={fieldName}
                        value={ CurrencyFormater.format(valueOfCountry, {precision: 0}) }
                        isSmall={false}
                        key={index}
                        hasSpace={hasSpace}
                      /> 
                    )

                    if ( Array.isArray( valueOfCountry ) && typeof valueOfCountry[0] != 'object' ) return (
                      <DescriptionRow 
                        title={ fieldName }
                        value={ valueOfCountry.join(', ') }
                        isSmall={false}
                        key={index}
                        hasSpace={hasSpace}
                      /> 
                    )

                    if ( Array.isArray( valueOfCountry ) && typeof valueOfCountry[0] == 'object' ) return (
                      <DescriptionRow 
                        title={ fieldName }
                        value={ valueOfCountry.map((item: any) => item.name && item.name).join(', ') }
                        isSmall={false}
                        key={index}
                        hasSpace={hasSpace}
                      /> 
                    )
                  })
                }
            </View>

            {
              !isLoadingBorder
                ? <BorderCountries countriesList={listOfBorderCountries} />
                : (
                  <View style={ styles.loadingContainer }>
                    <ActivityIndicator size={50}/>
                  </View>
                )
            }
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
    marginBottom: 30,
    justifyContent: 'center'
  },
  image: {
    flex: 1,
    objectFit: 'cover'
  },
  loadingContainer: {
    flex: 1,
    minHeight: 300,
    justifyContent: 'center'
  },
  title: {
    fontSize: 26,
    color: colors.darkBlue,
    fontWeight: 'bold',
    marginBottom: 20
  }
})
