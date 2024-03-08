import { View, Text, StyleSheet } from "react-native"
import { Colors } from "../../constants/color"

export const NumberContainer = ({children}) => {
    return (
        <View style={style.container}>
            <Text style={style.numberText} >{children}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.secondary600,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.secondary600,
        fontSize: 36,
        fontWeight: 'bold'
    }
})