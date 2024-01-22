import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../theme/appTheme';

interface DescriptionRowProps {
    title: string;
    value: string;
    isSmall: boolean;
}

export const DescriptionRow = ({ title, isSmall, value }: DescriptionRowProps) => {
  return (
    <View style={ styles.descRow }>
        <Text style={ isSmall ? styles.rowTitleSmall : styles.rowTitle}>
            { title }
        </Text>
        <Text style={ isSmall ? styles.rowTextSmall : styles.rowText }>
            { value }
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    descRow: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    rowTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.darkBlue
    },
    rowText: {
        fontSize: 20,
        marginLeft: 5,
        color: colors.darkBlue
    },
    rowTitleSmall: {
        fontSize: 12,
        fontWeight: 'bold',
        color: colors.darkBlue
    },
    rowTextSmall: {
        fontSize: 12,
        marginLeft: 5,
        color: colors.darkBlue
    },
})