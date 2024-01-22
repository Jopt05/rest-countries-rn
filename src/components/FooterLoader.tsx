import React from 'react'
import { View, ActivityIndicator } from 'react-native'

interface FooterLoaderProps {
  isLoading: boolean;
}

export const FooterLoader = ({ isLoading }: FooterLoaderProps) => {
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
                  color={'blue'}
              />
          </View>
        )
      }
    </>
  )
}
