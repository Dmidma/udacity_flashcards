import { Component } from 'react'
import QuizTemplate from './QuizTemplate'
import { getDeck } from '../../utils/api'

class Quiz extends Component {

    state = {
        deck: null,
        index: -1,
        mainText: ''
    }

    componentDidMount() {
       getDeck(this.props.navigation.state.params.deckTitle)
        .then((deck) => this.setState({ deck, index: 0 }))
    }

    moveToNextQuestion = () => {
        const nextIndex = this.state.index + 1
        this.setState((state) => 
            ({ index: (nextIndex === state.deck.questions.length)? nextIndex - 1 : nextIndex  })
        )
    }

    pressAnswer = () => {
        console.log("Pressed on Answer")
    }

    pressCorrect = () => {
        console.log("Pressed on Correct")
    }

    pressIncorrect = () => {
        console.log("Pressed on Incorrect")
    }

    render() {
        const { deck, index } = this.state
        if (deck === null) return null
        return (
            QuizTemplate(
                deck, 
                index, 
                this.pressAnswer, 
                this.pressCorrect, 
                this.pressIncorrect
            )
        )
    }
}

export default Quiz
