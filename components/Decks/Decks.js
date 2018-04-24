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

    render() {
        const { decks } = this.state
        return (
            DecksTemplate(decks)
        )
    }
}

export default Decks
