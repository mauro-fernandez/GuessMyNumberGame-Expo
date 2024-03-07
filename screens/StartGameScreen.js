import { View, Text, TextInput, StyleSheet } from "react-native"
import { PrimaryButton } from "../components/PrimaryButton"

export function StartGameScreen(){
    return (
        <View style={styles.inputContainer}>
            <TextInput />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>

    )
}


const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#72063c',
        elevation: 4, //only works for android
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        // this 4 shadow prop works for ios only, and the combination of the 4 simulates de
        // elevation in android
    }
})