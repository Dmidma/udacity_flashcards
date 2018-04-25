import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './QuizStyling'


const QuizTemplate = (deck, index, mainText, result, 
    pressAnswer, pressCorrect, pressIncorrect, pressGoBack, pressRestart) => (
    <View style={styles.container}>
        {deck.questions.length === 0 && (
            <Text style={styles.mainText}>
                No cards in this deck =(
            </Text>
        )}

        {deck.questions.length > 0 && result === null && (
            <View style={styles.container}>
                <Text>
                    {`${index + 1} / ${deck.questions.length}`}
                </Text>
                <Text style={styles.mainText}>
                    {mainText}
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

        {result !== null && (
            <View style={styles.container}>
                <Text style={styles.mainText}>
                    Score: {result}%
                </Text>
                <TouchableOpacity
                    style={styles.restartBtn}
                    onPress={pressRestart}
                >
                    <Text style={styles.btnText}>Restart</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.goBakBtn}
                    onPress={pressGoBack}
                >
                    <Text style={styles.btnText}>Go Back</Text>
                </TouchableOpacity>

            </View>
        )}
    </View>
)


export default QuizTemplate
