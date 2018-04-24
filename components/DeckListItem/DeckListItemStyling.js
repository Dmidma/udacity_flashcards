import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#53575e',
        padding: 20,
        width: width,
        alignSelf: 'stretch'
    },
    deckTitle: {
        fontSize: 30
    },
    deckCards: {
        color: '#9299a3',
        fontSize: 20
    }
})

export default styles
