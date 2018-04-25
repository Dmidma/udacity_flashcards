import React from 'react'
import { 
    KeyboardAvoidingView, 
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'
import styles from './AddCardStyling'


const AddCardTemplate = (
        question, 
        answer, 
        changeQuestion, 
        changeAnswer,
        persistNewCard) => (
    <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
            <TextInput 
                style={styles.input}
                value={question}
                placeholder="Question"
                onChangeText={changeQuestion}
            />
            <TextInput 
                style={styles.input}
                value={answer}
                placeholder="Answer"
                onChangeText={changeAnswer}
            />
            <TouchableOpacity
                style={styles.submitBtn}
                onPress={persistNewCard}
            >
                <Text style={styles.submitBtnTxt}>Submit</Text>
            </TouchableOpacity>
    </KeyboardAvoidingView>
)


export default AddCardTemplate
