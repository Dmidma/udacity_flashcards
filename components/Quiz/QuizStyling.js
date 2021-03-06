import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column'
    },
    mainText: {
        fontSize: 40,
        justifyContent: 'center',
        alignItems: 'center'
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
        justifyContent: 'center',
        marginBottom: 30
    },
    incorrectBtn: {
        backgroundColor: '#ef2f00',
        width: 200,
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    goBakBtn: {
        backgroundColor: '#000000',
        width: 200,
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    restartBtn: {
        backgroundColor: '#261ff2',
        width: 200,
        padding: 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30
    },
    btnText: {
        fontSize: 20,
        color: '#ffffff'
    }
})

export default styles
