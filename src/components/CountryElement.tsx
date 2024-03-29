import React, { useContext } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, globalStyles } from '../theme/appTheme'
import { DescriptionRow } from './DescriptionRow';
import { Country } from '../interfaces/Country';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/ThemeContext';

interface CountryElementProps {
    population: string;
    region: string;
    capital: string;   
    imageUri: string;
    name: string;
}

export const CountryElement = ({ name, imageUri, capital, population, region }: CountryElementProps) => {

    const { theme } = useContext( ThemeContext )

    const navigator = useNavigation();

    return (
        <TouchableOpacity 
            style={{
                ...styles.mainContainer,
                ...globalStyles.largeHorizontalMargin,
                backgroundColor: theme.inputBackground
            }}
            onPress={ () => navigator.navigate('DetailsScreen', { countryName: name }) }
        >
            <View style={ styles.imageContainer }>
                <Image 
                    style={ styles.image }
                    source={{
                        uri: imageUri
                    }}
                />
            </View>
            <View style={ styles.descContainer }>
                <Text style={{
                    ...styles.descTitle,
                    color: theme.colors.text
                }}>
                    { name }
                </Text>
                <DescriptionRow 
                    title='Population:'
                    value={ population }
                    isSmall={true}
                />
                <DescriptionRow 
                    title='Region:'
                    value={ region }
                    isSmall={true}
                />
                <DescriptionRow 
                    title='Capital'
                    value={ capital }
                    isSmall={true}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: colors.white,
        marginBottom: 40,
        borderRadius: 5,
        
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 3,
    },
    imageContainer: {
        height: 180,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    image: {
        flex: 1
    },
    descContainer: {
        paddingVertical: 35,
        paddingHorizontal: 24
    },
    descTitle: {
        fontSize: 18,
        color: colors.darkBlue,
        fontWeight: 'bold',
        marginBottom: 20,
    }
})