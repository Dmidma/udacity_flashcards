import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './QuizStyling'


const QuizTemplate = (deck, index, pressAnswer, pressCorrect, pressIncorrect) => (
    <View style={styles.container}>
        {deck.questions.length === 0 && (
            <Text style={styles.fonty}>
                No cards in this deck =(
            </Text>
        )}

        {deck.questions.length > 0 && (
            <View style={styles.container}>
                <Text>
                    {`${index + 1} / ${deck.questions.length}`}
                </Text>
                <Text style={styles.mainText}>
                    {deck.questions[index].question}?
                </Text>
                <TouchableOpacity
                    onPress={pressAnswer}
                >
                    <Text style={styles.answerBtnText}>Answer</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.corretBtn}
                    onPress={pressCorrect}
                >
                    <Text style={styles.btnText}>Correct</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={styles.incorrectBtn}
                    onPress={pressIncorrect}
                >
                    <Text style={styles.btnText}>Incorrect</Text>
                </TouchableOpacity>
            </View>
        )}
    </View>
)


export default QuizTemplate
