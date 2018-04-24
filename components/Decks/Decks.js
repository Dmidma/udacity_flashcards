import { Component } from 'react'
import DecksTemplate from './DecksTemplate'
import { getDefaultDecks } from '../../utils/api'

class Decks extends Component {

    state = {
        decks: []
    }

    componentDidMount() {
        this.setState({ decks: getDefaultDecks() })
    }

    openDeck = (id) => {
        console.log(`Clicked on Deck ${id}`)
        this.props.navigation.navigate('DeckDetail')
    }

    render() {
        const { decks } = this.state
        return (
            DecksTemplate(decks, this.openDeck)
        )
    }
}

export default Decks
