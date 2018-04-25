import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import NewDeck from './components/NewDeck'
import Decks from './components/Decks'
import Deck from './components/Deck'
import AddCard from './components/AddCard'

import { 
    getDecks,
    saveDeckTitle,
    getDeck,
    addCardToDeck,
    setDefaultDecks
} from './utils/api'

const Tabs = TabNavigator({
    Decks: {
        screen: Decks,
        navigationOptions: {
            tabBarLabel: 'Decks',
        }
    },
    NewDeck: {
        screen: NewDeck,
        navigationOptions: {
            tabBarLabel: 'New Deck',
        }
    }
})


const MainNavigator = StackNavigator({
    Main: {
        screen: Tabs,
        navigationOptions: {
            header: null
        }
    },
    DeckDetail: {
        screen: Deck,
    },
    AddCard: {
        screen: AddCard,
        navigationOptions: {
            title: 'Add Card',
        }
    }
})

export default class App extends React.Component {
    state = {
        decks: [],
        currentDeck: null
    }

    componentDidMount() {
        this.updateDecks()
    }

    toggleRefresh = () => this.setState((state) => ({ refresh: !state.refresh }))

    updateDecks = () => getDecks().then((decks) => this.setState(({ decks })))

    updateCurrentDeck = (title) => getDeck(title)
        .then((deck) => this.setState({ 
            currentDeck: {
                title: deck.title, 
                cardsNumber: deck.questions.length 
            }
        }))
    
    increaseCardNumbers = () => 
        this.setState((state) => { 

            // TODO: change this to a proper way
            let decks = state.decks
            decks[decks.findIndex((deck) => (deck.title === state.currentDeck.title))].questions.push({})

            
            return {
                decks: [...decks],
                currentDeck: {
                    title: state.currentDeck.title,
                    cardsNumber: state.currentDeck.cardsNumber + 1
                } 
            }
        })


    render() {
        return (
            <View style={{ flex: 1 }}>
            <View style={{height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor='#ff4562'/>
            </View>
                <MainNavigator
                    screenProps={{
                        decks: this.state.decks,
                        updateDecks: this.updateDecks,
                        currentDeck: this.state.currentDeck,
                        updateCurrentDeck: this.updateCurrentDeck,
                        increaseCardNumbers: this.increaseCardNumbers
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
