import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './DeckListItemStyling'


const DeckListItem = ({ openDeck, id, deckTitle, deckCardsNumber }) => {
    
    _openDeck = () => {
        openDeck(id)
    }

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={_openDeck}
        >
        <Text style={styles.deckTitle}>{deckTitle}</Text>
        <Text style={styles.deckCards}>{deckCardsNumber} cards</Text>
        </TouchableOpacity>
    )
}

export default DeckListItem
