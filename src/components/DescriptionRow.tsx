import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../theme/appTheme';
import { ThemeContext } from '../context/ThemeContext';

interface DescriptionRowProps {
    title: string;
    value: string;
    isSmall: boolean;
    hasSpace?: boolean;
}

export const DescriptionRow = ({ title, isSmall, value, hasSpace}: DescriptionRowProps) => {

    const { theme } = useContext( ThemeContext )
  return (
    <View style={{
        ...styles.descRow,
        marginBottom: hasSpace ? 40 : 15
    }}>
        <Text style={{
            ...isSmall ? styles.rowTitleSmall : styles.rowTitle,
            color: theme.colors.text
        }}>
            { title }
        </Text>
        <Text style={{
            ...isSmall ? styles.rowTextSmall : styles.rowText,
            color: theme.colors.text
        }}>
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