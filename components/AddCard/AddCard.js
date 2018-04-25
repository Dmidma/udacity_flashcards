import { Component } from 'react'
import AddCardTemplate from './AddCardTemplate'

class AddCard extends Component {
    
    state = {
        question: '',
        answer: ''
    }
    
    changeQuestion = (question) => this.setState({ question })
    changeAnswer = (answer) => this.setState({ answer })

    persistNewCard = () => {
        const { question, answer } = this.state

        console.log("Persisting new Card ....")
        console.log(`Question: ${question}`)
        console.log(`Answer: ${answer}`)
    }

    render() {
        const { question, answer } = this.state
        return (
            AddCardTemplate(
                question, 
                answer, 
                this.changeQuestion, 
                this.changeAnswer,
                this.persistNewCard
            )
        )
    }
}

export default AddCard
