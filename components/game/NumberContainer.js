import { View, Text, StyleSheet, Dimensions } from "react-native"
import { Colors } from "../../constants/color"

export const NumberContainer = ({children}) => {
    return (
        <View style={style.container}>
            <Text style={style.numberText} >{children}</Text>
        </View>
    )
}

const deviceWidth = Dimensions.get('window').width

const style = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.secondary600,
        padding: deviceWidth < 380 ? 12 : 24,
        margin:  deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.secondary600,
        fontSize: deviceWidth < 380 ? 28 : 36,
        fontFamily: 'open-sans-bold'
    }
})