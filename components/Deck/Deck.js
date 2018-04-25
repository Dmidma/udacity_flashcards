import { Component } from 'react'
import DeckTemplate from './DeckTemplate'

class Deck extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state


        // TODO: add headerStyle in the returned object
        return {title: params.id}
    }

    state = {
        title: ''
    }
        
    componentDidMount() {
        this.setState({title: this.props.navigation.state.params.id})
    }

    addCard = () => {
        console.log("Add Card Clicked")
    }

    startQuiz = () => {
        console.log("Start quiz clicked")
    }

    render() {
        const { title } = this.state
        return (
            DeckTemplate(title, this.addCard, this.startQuiz)
        )
    }
}

export default Deck
