import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { colors, globalStyles } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDebouncedValue } from '../hooks/useDebouncedValue';
import { ThemeContext } from '../context/ThemeContext';

interface SearchInputProps {
  onDebounce: (text: string) => void;
}

export const SearchInput = ({ onDebounce }: SearchInputProps) => {

  const { theme } = useContext( ThemeContext )

  const [text, setText] = useState('');

  const debouncedValue = useDebouncedValue(text, 1000);

  useEffect(() => {
    onDebounce(debouncedValue);
  }, [debouncedValue])
  
  const handleChange = (value: string) => {
    setText(value);
  }

  return (
    <View style={{
      ...styles.inputContainer,
      ...globalStyles.shortHorizontalMargin,
      backgroundColor: theme.inputBackground
    }}>
      <Icon 
        name='search-outline'
        color={ theme.colors.text }
        size={ 20 }
        style={ styles.searchIcon }
      />
      <TextInput
        value={ text }
        style={{
          ...styles.textInput,
          color: theme.colors.text
        }}
        placeholderTextColor={theme.colors.text}
        placeholder='Search for a country...'
        onChangeText={ (value) => handleChange(value) }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    marginTop: 30,
    // backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 45,
    borderRadius: 5,
    alignItems: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },
  searchIcon: {
    marginRight: 20
  },
  textInput: {
    flex: 1,
  }
})