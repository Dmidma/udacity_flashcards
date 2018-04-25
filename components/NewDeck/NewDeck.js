import { Component } from 'react'
import NewDeckTemplate from './NewDeckTemplate'
import { saveDeckTitle } from '../../utils/api'
import { Keyboard, Alert } from 'react-native'

class NewDeck extends Component {

    state = {
        deckTitle: ''
    }
    
    changeDeckTitle = (deckTitle) => this.setState({ deckTitle })

    persistNewDeck = () => {
        Keyboard.dismiss()
        saveDeckTitle(this.state.deckTitle).then(result => {
            if (result.error) {
                Alert.alert('oops', result.error)
            } else {
                //Alert.alert('yeey', result.success)
                const id = this.state.deckTitle
                this.setState({ deckTitle: '' })
                this.props.screenProps.updateDecks()
                this.props.navigation.navigate('DeckDetail', { id })
            }
        })
    }

    render() {
        const { deckTitle } = this.state
        return (
            NewDeckTemplate(deckTitle, this.changeDeckTitle, this.persistNewDeck)
        )
    }
}

export default NewDeck
