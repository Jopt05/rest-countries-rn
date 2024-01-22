import { StyleSheet } from "react-native"

export const colors = {
    darkBlue: 'hsl(209, 23%, 22%)',
    veryDarkBlue: 'hsl(207, 26%, 17%)',
    veryDarkBlueText: 'hsl(200, 15%, 8%)',
    darkGray: 'hsl(0, 0%, 52%)',
    veryLightGray: 'hsl(0, 0%, 98%)',
    white: 'hsl(0, 0%, 100%)'
}

export const globalStyles = StyleSheet.create({
    shortHorizontalMargin: {
        marginHorizontal: 20,
    },
    largeHorizontalMargin: {
        marginHorizontal: 80
    },
    shadowButton: {
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.10,
        shadowRadius: 2.84,

        elevation: 1,
    }
})