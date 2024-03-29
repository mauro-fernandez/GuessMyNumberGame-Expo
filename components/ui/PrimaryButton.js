import { View, Text, StyleSheet, Pressable } from 'react-native'
import { Colors } from '../../constants/color'

export const PrimaryButton = ({children, onPress}) => {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                onPress={onPress}
                android_ripple={{color: Colors.primary600}} 
                style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer}
            >
                <Text  style={styles.buttonText}>{children}</Text>
            </Pressable>    
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        margin: 4,
        borderRadius: 28,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,

    },
    buttonText: {
        color: Colors.white,
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,
    }
})