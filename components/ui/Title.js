import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../../constants/color'

export const Title = ({children}) => {
    return (
        <Text style={styles.title}>{children}</Text>
     )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.white,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.white,
        padding: 12
    }
})