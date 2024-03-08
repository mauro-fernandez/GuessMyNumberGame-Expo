import { useState, useEffect } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { Title } from '../components/ui/Title'
import { Card } from'../components/ui/Card'
import { NumberContainer } from '../components/game/NumberContainer'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { InstructionText } from "../components/ui/InstructionText"

const generateRandomBetween = (min, max, exclude) => {
    const randomNumber = Math.floor(Math.random() * (max-min)) + min

    if(randomNumber === exclude){
        return generateRandomBetween(min, max, exclude)
    } else {
        return randomNumber
    }
}

let minBoundary = 1
let maxBoundary = 100

export const GameScreen = ({userNumber, onGameOver}) => {
    const initialGuess = generateRandomBetween(1,100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(() => {
        if(currentGuess === userNumber){
            onGameOver()
        }
    },[currentGuess, userNumber, onGameOver])
    
    const nextGuessHandler = (direction) => {
        if((direction === 'lower' && currentGuess < userNumber) || (direction === 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie", 'You know this is wrong...', [{text: 'Sorry', style: 'cancel' }])
            return
        }
        if(direction === 'lower'){
            maxBoundary = currentGuess
        } else {
            minBoundary = currentGuess + 1
        }
        const newRandomNumber = generateRandomBetween(minBoundary,maxBoundary, currentGuess)
        setCurrentGuess(newRandomNumber)
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
                <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText>Higher or lower?</InstructionText>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>+</PrimaryButton>
                </View>
            </Card>
            <View>
              
            </View>
        </View>
     )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
})