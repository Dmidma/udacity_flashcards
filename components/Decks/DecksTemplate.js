import React from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './DecksStyling'


const DecksTemplate = (decks) => (
    <View style={styles.container}>
        <FlatList 
            data={decks}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
        />
    </View>
)

const renderItem = ({ item }) => (
    <View>
        <Text>{item.title}</Text>
        <Text>{item.questions? item.questions.length : 0} cards</Text>
    </View>
)
const keyExtractor = (deck) => deck.title


export default DecksTemplate
