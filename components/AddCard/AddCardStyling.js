import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    input: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#000000',
        width: width - 50,
        fontSize: 20,
        padding: 10
    },
    submitBtn: {
        backgroundColor: '#000000',
        padding: 10,
        borderRadius: 5
    },
    submitBtnTxt: {
        color: '#ffffff',
        fontSize: 30
    }
})

export default styles
