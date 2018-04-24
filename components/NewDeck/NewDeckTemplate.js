import React from 'react'
import { 
    View, 
    Text, 
    KeyboardAvoidingView, 
    TextInput,
    TouchableOpacity
} from 'react-native'
import styles from './NewDeckStyling'

const NewDeckTemplate = (deckTitle, changeDeckTitle, persistNewDeck) => (
    <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
        <Text style={styles.bigTitle}>
            What is the title of your new deck?
        </Text>

        <TextInput
            style={styles.input}
            placeholder="Deck Title"
            value={deckTitle}
            onChangeText={changeDeckTitle}
        />

        <TouchableOpacity
            style={styles.button}
            onPress={persistNewDeck}
        >
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
    </KeyboardAvoidingView>
)


export default NewDeckTemplate
