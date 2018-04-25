import React from 'react'
import { 
    View, 
    Text, 
    TouchableOpacity,
    Animated
} 
from 'react-native'
import styles from './DeckStyling'


const DeckTemplate = (title, cardsNumber, addCard, startQuiz, opacity) => (
    <Animated.View style={[styles.container, { opacity }]}>
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
    </Animated.View>
)


export default DeckTemplate
