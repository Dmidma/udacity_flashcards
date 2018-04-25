import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './DeckStyling'


const DeckTemplate = (title, cardsNumber, addCard, startQuiz) => (
    <View style={styles.container}>
        <View>
            <Text style={styles.deckTitle}>
                {title}
            </Text>
            <Text style={styles.deckCards}>
                {cardsNumber} Cards
            </Text>
        </View>
        <View>
            <TouchableOpacity
                style={styles.addBtn}
                onPress={addCard}
            >
                <Text style={styles.addBtnText}>
                    Add Card
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.startQuizBtn}
                onPress={startQuiz}
            >
                <Text style={styles.startQuizBtnText}>
                    Start Quiz
                </Text>
            </TouchableOpacity>
        </View>
    </View>
)


export default DeckTemplate
