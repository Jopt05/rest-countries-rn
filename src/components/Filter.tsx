import React, { useContext, useState } from 'react'
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, globalStyles } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons'
import { ThemeContext } from '../context/ThemeContext';

interface FilterProps {
    onChange: (value: string) => void;
    currentValue: string;
}

export const Filter = ({ onChange, currentValue }: FilterProps) => {

    const { theme } = useContext( ThemeContext )

    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (regionName: string) => {
        onChange( regionName );
        setIsOpen(false);
    }

  return (
    <View style={{
        ...styles.mainContainer,
        ...globalStyles.shortHorizontalMargin,
    }}>
        <TouchableOpacity
            style={{ 
                ...styles.filterContainer,
                backgroundColor: theme.inputBackground
            }}
            onPress={ () => setIsOpen(!isOpen) }
        >
            <Text
                style={{
                    ...styles.filterText,
                    color: theme.colors.text
                }}
            >
                {
                    currentValue != ''
                        ? currentValue
                        : 'Filter by Region'
                }
            </Text>
            <Icon 
                name='chevron-down-outline'
                color={ colors.darkGray }
                size={ 20 }
            />
        </TouchableOpacity>

        <Modal
            animationType="fade"
            transparent={true}
            visible={isOpen}
        >
            <View style={{
                ...styles.filterModal,
                backgroundColor: theme.inputBackground
            }}>
                <TouchableOpacity
                    onPress={ () => handleChange('Africa') }
                >
                    <Text style={{
                        ...styles.textModal,
                        color: theme.colors.text
                    }}>
                        Africa
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={ () => handleChange('Americas') }
                >
                    <Text style={{
                        ...styles.textModal,
                        color: theme.colors.text
                    }}>
                        Americas
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={ () => handleChange('Asia') }
                >
                    <Text style={{
                        ...styles.textModal,
                        color: theme.colors.text
                    }}>
                        Asia
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={ () => handleChange('Europe') }
                >
                    <Text style={{
                        ...styles.textModal,
                        color: theme.colors.text
                    }}>
                        Europe
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={ () => handleChange('Oceania') }
                >
                    <Text style={{
                        ...styles.textModal,
                        color: theme.colors.text
                    }}>
                        Oceania
                    </Text>
                </TouchableOpacity>
                {
                    currentValue != '' && (
                        <TouchableOpacity
                            onPress={ () => handleChange('') }
                        >
                            <Text style={{
                                ...styles.textModal,
                                color: theme.colors.text
                            }}>
                                None
                            </Text>
                        </TouchableOpacity>
                    )
                }
            </View>
        </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 30,
        flexDirection: 'row',
        position: 'relative',
    },
    filterContainer: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginBottom: 20,
        borderRadius: 5,
        width: '50%',
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
    filterText: {
        color: colors.darkBlue
    },
    filterModal: {
        width: '46%',
        marginLeft: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        top: 270,
        borderRadius: 5,
        backgroundColor: colors.white,

        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 3,
    },
    textModal: {
        marginBottom: 10,
        color: colors.darkBlue
    }
})