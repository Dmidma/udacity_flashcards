import { Component } from 'react'
import DeckTemplate from './DeckTemplate'
import { getDeck } from '../../utils/api'
import { Animated, Dimensions } from 'react-native'

class Deck extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state

        return {title: params.id}
    }

    state = {
        deck: {
            title: '',
            questions: []
        },
        opacity: new Animated.Value(0),
    }
    
    componentDidMount() {
        const { opacity, width, height  } = this.state

        Animated.timing(opacity, { toValue: 1, duration: 2000  })
            .start()


        this.props.screenProps.updateCurrentDeck(this.props.navigation.state.params.id)
    }

    addCard = () => {
        this.props.navigation.navigate('AddCard', { deckTitle: this.props.screenProps.currentDeck.title })
    }

    startQuiz = () => {
        this.props.navigation.navigate('Quiz', { deckTitle: this.props.screenProps.currentDeck.title })
    }

    render() {
        const deck = this.props.screenProps.currentDeck
        const { opacity } = this.state
        if (deck === null) return null
        return (
            DeckTemplate(
                deck.title, 
                deck.cardsNumber, 
                this.addCard, 
                this.startQuiz,
                opacity,
            )
        )
    }
}

export default Deck
