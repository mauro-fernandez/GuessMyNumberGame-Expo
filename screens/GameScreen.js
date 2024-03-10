import { useState, useEffect } from 'react'
import { View, StyleSheet, Alert, Text, FlatList, useWindowDimensions } from 'react-native'
import { Title } from '../components/ui/Title'
import { Card } from'../components/ui/Card'
import { NumberContainer } from '../components/game/NumberContainer'
import { GuessLogItem } from '../components/game/GuessLogItem'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { InstructionText } from "../components/ui/InstructionText"
import { Ionicons } from '@expo/vector-icons'
import { Colors } from '../constants/color'

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
    const [guessRounds, setGuessRounds] = useState([initialGuess])

    const { width, height } = useWindowDimensions()

    useEffect(() => {
        if(currentGuess === userNumber){
            onGameOver(guessRounds.length)
        }
    },[currentGuess, userNumber, onGameOver])
    
    useEffect(() => {
        minBoundary = 1
        maxBoundary = 100
    },[])

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
        setGuessRounds(prev => [newRandomNumber,...prev])
    }

    const guessRoundsListLength = guessRounds.length

    let content = (
        <>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.InstructionText}>Higher or lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View  style={styles.buttonIndividualContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
                            <Ionicons name={'remove'} size={24} color={Colors.white}/>
                        </PrimaryButton>
                    </View>
                    <View  style={styles.buttonIndividualContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
                            <Ionicons name={'add'} size={24} color={Colors.white}/>
                        </PrimaryButton>
                    </View>
                </View>
            </Card>   
        </>
    )
    
    if(width > 500){
        content = (
            <>
            <View style={styles.buttonsContainerWide}>
                <View style={styles.buttonsContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>
                        <Ionicons name={'remove'} size={24} color={Colors.white}/>
                    </PrimaryButton>
                </View>    
                <NumberContainer>{currentGuess}</NumberContainer>
                <View style={styles.buttonsContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
                        <Ionicons name={'add'} size={24} color={Colors.white}/>
                    </PrimaryButton>
                </View>
            
            </View>
            
            </>
        )
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {content}
            <View style={styles.listContainer}>
              <FlatList
                data={guessRounds}
                 renderItem={itemData => <GuessLogItem roundNumber={guessRoundsListLength - itemData.index} guess={itemData.item}/>}
                 keyExtractor={(item)=> item}
                 showsVerticalScrollIndicator={false}
              />
            </View>
        </View>
     )

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
        alignItems: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonIndividualContainer: {
        flex: 1
    },
    InstructionText: {
        marginBottom: 12
    },
    listContainer: {
        flex: 1,
        padding: 16
    },
    buttonsContainerWide: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})