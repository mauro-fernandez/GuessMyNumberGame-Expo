import { View, Text, StyleSheet, Image, Dimensions, useWindowDimensions, ScrollView} from "react-native"
import { Title } from '../components/ui/Title'
import { PrimaryButton } from '../components/ui/PrimaryButton'
import { Colors } from "../constants/color"

export const GameOverScreen = ({roundsNumber, userNumber, OnStartNewGame}) => {
    const imageSucess = (require('../assets/images/success.png'))

    const { width, height} = useWindowDimensions()

    let imageSize = 300

    if(width < 380){
        imageSize = 150
    }

    if(height < 400){
        imageSize = 80
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    }

    return (
        <ScrollView style={style.screen}>
            <View style={style.rootContainer}>
                <Title>GAME OVER!</Title>
                <View style={[style.imageContainer, imageStyle]} >
                    <Image source={imageSucess} style={style.image}/>
                </View>
                <Text style={style.summaryText}>Your phone needed <Text style={style.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={style.highlight}>{userNumber}</Text>.</Text>
                <PrimaryButton onPress={OnStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </ScrollView>
    )
}

// const deviceWidth = Dimensions.get('window').width

const style = StyleSheet.create({
    screen: {
        flex: 1
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
    //    width: deviceWidth < 300 ? 200 : 300,
    //    height: deviceWidth < 300 ? 200 : 300,
    //    borderRadius: deviceWidth < 300 ? 100 : 300,
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