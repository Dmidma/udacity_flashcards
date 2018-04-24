import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation'
import { Constants } from 'expo'
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
        <View style={{height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor='#ff4562'/>
        </View>

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
