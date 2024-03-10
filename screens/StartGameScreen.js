import { useState } from "react"
import { View, TextInput, StyleSheet, Alert, Dimensions, useWindowDimensions, KeyboardAvoidingView, ScrollView} from "react-native"
import { Colors } from "../constants/color"
import { PrimaryButton } from "../components/ui/PrimaryButton"
import { Title } from "../components/ui/Title"
import { Card } from "../components/ui/Card"
import { InstructionText } from "../components/ui/InstructionText"

export const StartGameScreen = ({onPickNumber}) => {
    const [enteredNumber, setEnteredNumber] = useState('')

    const { width, height } = useWindowDimensions()

    const marginTopDistance = height < 400 ? 30 : 100

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

    // KeyboardAvoidingView is used for ios, because hte keyboard takes half the screen and 
    // doesn't have a go back button, like android. Also, it makes the keyboard go away by just tapping
    // the other half of the screen. Morevoer, the KeyboardAvoidingView has to be inside a ScrollView component
    return (
        <ScrollView style={styles.screen}>
        <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer,{marginTop: marginTopDistance}]}>
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
        </KeyboardAvoidingView>
        </ScrollView>
    )
}

const deviceHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        marginTop: deviceHeight < 400 ? 30 : 100,
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