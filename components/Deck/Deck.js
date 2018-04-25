import { Component } from 'react'
import DeckTemplate from './DeckTemplate'
import { getDeck } from '../../utils/api'

class Deck extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state

        return {title: params.id}
    }

    state = {
        deck: {
            title: '',
            questions: []
        }
    }
    
    componentDidMount() {
        this.props.screenProps.updateCurrentDeck(this.props.navigation.state.params.id)
    }

    addCard = () => {
        this.props.navigation.navigate('AddCard', { deckTitle: this.props.screenProps.currentDeck.title })
    }

    startQuiz = () => {
        console.log("Start quiz clicked")
    }

    render() {
        const deck = this.props.screenProps.currentDeck
        if (deck === null) return null
        return (
            DeckTemplate(
                deck.title, 
                deck.cardsNumber, 
                this.addCard, 
                this.startQuiz
            )
        )
    }
}

export default Deck
