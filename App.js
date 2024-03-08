import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from './constants/color';
import { StartGameScreen } from './screens/StartGameScreen';
import { GameScreen } from './screens/GameScreen';
import { GameOverScreen } from './screens/GameOverScreen';

export default function App() {
  const diceImage = (require('./assets/diceBackground.png'))
  const [userNumber, setUserNumber] = useState(null)
  const [gameIsOver, setGameIsOver] = useState(false)

  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber)
    setGameIsOver(false) // is necesary?
  }

  const gameOverHandler = () => {
    setGameIsOver(true)
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if(gameIsOver && userNumber) {
    screen = <GameOverScreen />
  }

  return (
    <LinearGradient colors={[Colors.primary700, Colors.secondary600]} style={styles.rootScreen}>
      <ImageBackground
        source={diceImage}
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
      <SafeAreaView style={styles.rootScreen}>
        {screen}
      </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage:{
    opacity: 0.15,
  }
});
