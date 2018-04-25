import { Component } from 'react'
import AddCardTemplate from './AddCardTemplate'
import { addCardToDeck } from '../../utils/api'
import { Keyboard, Alert } from 'react-native'

class AddCard extends Component {
    
    state = {
        question: '',
        answer: ''
    }
    
    changeQuestion = (question) => this.setState({ question })
    changeAnswer = (answer) => this.setState({ answer })

    persistNewCard = () => {
        const { question, answer } = this.state
        const title = this.props.navigation.state.params.deckTitle 
    
        Keyboard.dismiss()
        
        addCardToDeck(title, { question, answer })
            .then((result) => Alert.alert('Yeey', result.success))

        this.changeQuestion('')
        this.changeAnswer('')
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
