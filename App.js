import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation'
import NewDeck from './components/NewDeck'
import Decks from './components/Decks'

const Tabs = TabNavigator({
    Decks: {
        tabBarLabel: 'Decks',
        screen: Decks
    },
    NewDeck: {
        tabBarLabel: 'New Deck',
        screen: NewDeck
    }
})

export default class App extends React.Component {
  render() {
    return (
        <View style={{ flex: 1 }}>
            <Tabs />
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
