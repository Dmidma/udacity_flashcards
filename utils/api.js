import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'udacicards'

export const defaultDecks = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces'

            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event'

            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
        ]
    }
}

export function getDefaultDecks() {
    return Object.keys(defaultDecks).map((deckKey) => defaultDecks[deckKey])
}

function parseDecks(decks) {
    return Object.keys(decks).map((deckKey) => decks[deckKey])
}

export function setDefaultDecks() {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(defaultDecks))
}

export function removeAllDecks() {
    return AsyncStorage.removeItem(STORAGE_KEY)
} 


export function getDecks() {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then((result) => JSON.parse(result))
        .then(parseDecks)
}

export function getDeck(id) {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then((result) => {
            const decks = JSON.parse(result)
            return (decks[id]) ? decks[id]: null
        })
}

export function saveDeckTitle(title) {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then((result) => {
            const decks = JSON.parse(result) 
            if (decks[title]) {
                return {"error": "Deck Title already exists!"}
            }
            decks[title] = {title, questions: []}
            return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks)).then((result) => ({"success": "A Deck has been added =D"}))
        })
}

export function addCardToDeck(title, card) {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then((result) => {
            const decks = JSON.parse(result)
            if (decks[title]) {
                decks[title].questions.push(card)
                return AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(decks)).then((result) => ({"success": `A new card has been added to ${title} deck =D`}))
            }
        })
}
