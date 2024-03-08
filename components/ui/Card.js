import { View, StyleSheet } from 'react-native'
import { Colors } from '../../constants/color'


export const Card = ({children}) => {
    return (
        <View style={styles.inputContainer}>{children}</View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 4, //only works for android
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        // this 4 shadow prop works for ios only, and the combination of the 4 simulates de
        // elevation in android
    },
})