import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    fonty: {
        fontSize: 40
    },
    addBtn: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#000000'
    },
    addBtnText: {
        fontSize: 30,
        color: '#000000'
    },
    startQuizBtn: {
        backgroundColor: '#000000',
        padding: 20,
        borderRadius: 5
    },
    startQuizBtnText: {
        color: '#ffffff',
        fontSize: 30
    }
})

export default styles
