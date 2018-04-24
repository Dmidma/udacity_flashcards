import { Component } from 'react'
import NewDeckTemplate from './NewDeckTemplate'

class NewDeck extends Component {

    state = {
        deckTitle: ''
    }
    
    changeDeckTitle = (deckTitle) => this.setState({ deckTitle })

    persistNewDeck = () => {
        // TODO: persist the new deck in the storage
        console.log(this.state.deckTitle)
    }
    render() {
        const { deckTitle } = this.state
        return (
            NewDeckTemplate(deckTitle, this.changeDeckTitle, this.persistNewDeck)
        )
    }
}

export default NewDeck
