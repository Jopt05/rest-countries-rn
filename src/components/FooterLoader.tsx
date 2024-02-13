import React, { useContext } from 'react'
import { View, ActivityIndicator } from 'react-native'
import { ThemeContext } from '../context/ThemeContext';

interface FooterLoaderProps {
  isLoading: boolean;
}

export const FooterLoader = ({ isLoading }: FooterLoaderProps) => {

  const { theme } = useContext( ThemeContext );
  
  return (
    <>
      {
        isLoading && (
          <View style={{
            height: 150,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
              <ActivityIndicator 
                  size={20}
                  color={ theme.colors.text }
              />
          </View>
        )
      }
    </>
  )
}
