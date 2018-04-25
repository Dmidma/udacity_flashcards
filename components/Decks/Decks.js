import { Component } from 'react'
import DecksTemplate from './DecksTemplate'
import { getDecks } from '../../utils/api'

class Decks extends Component {


    openDeck = (id) => {
        this.props.navigation.navigate('DeckDetail', { id })
    }

    render() {
        return (
            DecksTemplate(this.props.screenProps.decks, this.openDeck)
        )
    }
}

export default Decks
