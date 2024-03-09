import { View, Text, StyleSheet, Image } from "react-native"
import { Title } from '../components/ui/Title'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { Colors } from "../constants/color"

export const GameOverScreen = ({roundsNumber, userNumber, OnStartNewGame}) => {
    const imageSucess = (require('../assets/images/success.png'))
    return (
        <View style={style.rootContainer}>
            <Title>GAME OVER!</Title>
            <View style={style.imageContainer} >
                <Image source={imageSucess} style={style.image}/>
            </View>
            <Text style={style.summaryText}>Your phone needed <Text style={style.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={style.highlight}>{userNumber}</Text>.</Text>
            <PrimaryButton onPress={OnStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}

const style = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        height: '100%',
        width: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
})