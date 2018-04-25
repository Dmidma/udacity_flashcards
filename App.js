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
    componentDidMount() {
        console.log("App: Here")
        // setDefaultDecks()
        /*
        saveDeckTitle("Terma").then((result) => {
            console.log(result)
        })
        
        addCardToDeck("Terma", { question: "q", answer: "a" })
*/

    }

    render() {
        return (
            <View style={{ flex: 1 }}>
            <View style={{height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor='#ff4562'/>
            </View>

            <MainNavigator />
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
