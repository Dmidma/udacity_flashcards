import { AsyncStorage } from 'react-native'


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


export function getDecks() {
    return AsyncStorage.getAllKeys()
        .then((result) => {
            const data = JSON.parse(result)
            console.log(data)
        })
}

export function getDeck(id) {
    return AsyncStorage.getItem(id)
        .then((result) => {
            const data = JSON.parse(result)
            console.log(data)
        })
}

export function saveDeckTitle(title) {
    return AsyncStorage.setItem(title, JSON.stringify({
        title,
        questions: []
    }))
}

export function addCardToDeck(title, card) {
    return AsyncStorage.mergeItem(title, JSON.stringify({
        questions: [card]
    }))
}
