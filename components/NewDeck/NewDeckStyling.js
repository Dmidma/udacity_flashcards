import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    bigTitle: {
        fontSize: 30,
        marginRight: 30,
        marginLeft: 30
    },
    input: {
        borderWidth: 2,
        borderColor: '#000000',
        width: 300,
        fontSize: 20,
        borderRadius: 7,
        padding: 10,
        fontSize: 20
    },
    button: {
        backgroundColor: '#000000',
        borderRadius: 5,
        padding: 10
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 20
    }
})

export default styles
