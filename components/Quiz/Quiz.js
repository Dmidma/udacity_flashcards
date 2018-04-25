import { Component } from 'react'
import QuizTemplate from './QuizTemplate'
import { getDeck } from '../../utils/api'

class Quiz extends Component {

    state = {
        deck: null,
        index: -1,
        mainText: null,
        wrongAnswers: 0,
        result: null
    }

    componentDidMount() {
       getDeck(this.props.navigation.state.params.deckTitle)
        .then((deck) => this.setState({ 
            deck,
            index: 0,
            mainText: deck.questions[0].question
        }))
    }
    
    calculatePercentage = (total, wrong) => (Math.round((100 * (total - wrong)) / total))


    setResult = () => this.setState((state) => ({result: this.calculatePercentage(state.deck.questions.length, state.wrongAnswers)}))

    moveToNextQuestion = () => {
        const nextIndex = this.state.index + 1
        if (nextIndex === this.state.deck.questions.length) {
            this.setResult() 
            return
        }

        this.setState({
            index: nextIndex,
            mainText: this.state.deck.questions[nextIndex].question
        })
    }

    increaseWrongAnswers = () => this.setState((state) => ({ wrongAnswers: state.wrongAnswers + 1 }))

    setMainText = (mainText) => this.setState({ mainText })
    
    setCurrentQuestion = () => this.setMainText(this.state.deck.questions[this.state.index].question)

    setCurrentAnswer = () => this.setMainText(this.state.deck.questions[this.state.index].answer)

    pressAnswer = () => {
        this.setCurrentAnswer()
    }

    pressCorrect = () => {
        this.moveToNextQuestion()
    }

    pressIncorrect = () => {
        this.increaseWrongAnswers()
        this.moveToNextQuestion()
    }

    render() {
        const { deck, index, mainText, result } = this.state
        if (deck === null) return null
        return (
            QuizTemplate(
                deck, 
                index,
                mainText,
                result,
                this.pressAnswer, 
                this.pressCorrect, 
                this.pressIncorrect
            )
        )
    }
}

export default Quiz
