import { View, Text, StyleSheet, Platform } from 'react-native'
import { Colors } from '../../constants/color'

export const Title = ({children}) => {
    return (
        <Text style={styles.title}>{children}</Text>
     )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: Colors.white,
        textAlign: 'center',
        // One way to use Platform for styling
        // borderWidth: Platform.OS === 'android' ? 2 : 0,
        // Other way to use Platform for styling
        borderWidth: Platform.select({ios: 0 , android: 2}),
        borderColor: Colors.white,
        padding: 12,
        maxWidth: '80%',
        width: 300
    }
})

// There is a 3rd way. You can name the file Title.android.js and make a copy call Title.ios.js
// There you can style for each platform, and under the hood, react native will use accoding to the 
// platform you are on. The import when you use it has to be call as usual, like "import { Title } from "../components/ui/Title"
// Imagine applying this to Colors file, and have different lookalike apps, but doing the same