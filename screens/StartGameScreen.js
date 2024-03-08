import { useState } from "react"
import { View, TextInput, StyleSheet, Alert } from "react-native"
import { Colors } from "../constants/color"
import { PrimaryButton } from "../components/ui/PrimaryButton"
import { Title } from "../components/ui/Title"
import { Card } from "../components/ui/Card"
import { InstructionText } from "../components/ui/InstructionText"

export const StartGameScreen = ({onPickNumber}) => {
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
        onPickNumber(chosenNumber)
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Number</Title>
            <Card>
                <InstructionText>Enter a Number</InstructionText>
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
            </Card>
        </View>
    )
}


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.secondary600,
        borderBottomWidth: 2,
        color: Colors.secondary600,
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