import { Text, StyleSheet } from 'react-native'
import { Colors } from '../../constants/color'

export const InstructionText = ({children}) => {
    return (
        <Text style={styles.instructionText}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.secondary600,
        fontSize: 24,
    },
})