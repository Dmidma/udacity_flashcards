import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import DeckListItem from '../DeckListItem'
// TODO: delte the styling file as it's not needed?
import styles from './DecksStyling'


const DecksTemplate = (decks, openDeck) => (
    <FlatList 
        data={decks}
        renderItem={({ item }) => (
            <DeckListItem
                id={item.title}
                deckTitle={item.title}
                deckCardsNumber={item.questions? item.questions.length: 0}
                openDeck={openDeck}
            />
        )}
        keyExtractor={(deck) => deck.title}
    />
)

export default DecksTemplate
