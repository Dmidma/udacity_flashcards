import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column'
    },
    mainText: {
        fontSize: 40
    },
    answerBtnText: {
        color: '#ef2f00',
        fontSize: 20
    },
    corretBtn: {
        backgroundColor: '#05aa1b',
        width: 200,
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    incorrectBtn: {
        backgroundColor: '#ef2f00',
        width: 200,
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontSize: 20,
        color: '#ffffff'
    }
})

export default styles
