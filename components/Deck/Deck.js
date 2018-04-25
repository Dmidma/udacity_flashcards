import { Component } from 'react'
import DeckTemplate from './DeckTemplate'
import { getDeck } from '../../utils/api'

class Deck extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state

        // TODO: add headerStyle in the returned object
        return {title: params.id}
    }

    state = {
        deck: {}
    }
        
    componentDidMount() {
        getDeck(this.props.navigation.state.params.id).then((deck) => {
            this.setState({ deck })
        })
    }

    addCard = () => {
        this.props.navigation.navigate('AddCard', { deckTitle: this.state.title })
    }

    startQuiz = () => {
        console.log("Start quiz clicked")
    }

    render() {
        const { title } = this.state.deck
        return (
            DeckTemplate(title, this.addCard, this.startQuiz)
        )
    }
}

export default Deck
