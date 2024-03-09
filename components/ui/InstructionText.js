import { Text, StyleSheet } from 'react-native'
import { Colors } from '../../constants/color'

export const InstructionText = ({children, style}) => {
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: Colors.secondary600,
        fontSize: 24,
    },
})