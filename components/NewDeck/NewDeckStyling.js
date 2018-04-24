import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    bigTitle: {
        fontSize: 30
    },
    input: {
        borderWidth: 2,
        borderColor: '#000000',
        width: 300,
        fontSize: 20,
        borderRadius: 7
    },
    button: {
        backgroundColor: '#000000',
        borderRadius: 5
    },
    buttonText: {
        color: '#ffffff'
    }
})

export default styles
