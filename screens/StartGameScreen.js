import { useState } from "react"
import { View, Text, TextInput, StyleSheet, Alert } from "react-native"
import { PrimaryButton } from "../components/PrimaryButton"

export function StartGameScreen(){
    const [enteredNumber, setEnteredNumber] = useState('')

    const numberInputHandler = (enteredNumber) => {
        setEnteredNumber(enteredNumber)
    }

    const resetInputHandler = () => {
        setEnteredNumber('')
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredNumber)
        if(isNaN(enteredNumber) || !chosenNumber || chosenNumber <= 0 || chosenNumber > 99 ){
            Alert.alert(
                'Invalid number',
                'Number has to be between 1 and 99',
                [{text: 'OK', style: 'destructive', onPress: resetInputHandler}])
            return
        }

        console.log('valid number')
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
                value={enteredNumber}
                onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonIndividualContainer}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonIndividualContainer}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        borderRadius: 8,
        backgroundColor: '#4e0329', // '#3b021f',
        elevation: 4, //only works for android
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
        // this 4 shadow prop works for ios only, and the combination of the 4 simulates de
        // elevation in android
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: '#ddb52f',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonIndividualContainer: {
        flex: 1
    }
})