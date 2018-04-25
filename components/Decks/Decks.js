import { Component } from 'react'
import DecksTemplate from './DecksTemplate'
import { getDecks } from '../../utils/api'

class Decks extends Component {

    state = {
        decks: []
    }

    componentDidMount() {
        console.log("Decks: here")
        getDecks().then((decks) => this.setState(({ decks })))
    }

    openDeck = (id) => {
        console.log(`Clicked on Deck ${id}`)
        this.props.navigation.navigate('DeckDetail', { id })
    }

    render() {
        const { decks } = this.state
        return (
            DecksTemplate(decks, this.openDeck)
        )
    }
}

export default Decks
