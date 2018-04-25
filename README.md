## Udacity Third Project: UdaciCards

This is the third project of Udacity's React course. This project is a React Native App that allos the user to:

- create new decks
- add cards to decks (cards are composed of one question and its answer)
- make a quiz based on the cards


### Run:

To run the application, go under the root directory and run:

```
$ yarn start
```

After you will have memu from whih you can select.  
I have tested on my Android Device Galaxy S7, thus I went with the `a` option =D


### Explanation

When you open the application you will have a screen that contains two tabs.  
The first is a `FlatList` of the available decks.  
The second contains a form that will allow to add a new deck.


When you select a deck from the list, a new screen will _fade in_ that contains:

- Deck title
- Number of cards
- Button to add card
- Button to start quiz


If you click the _Add Card_ button, a new screen will be displayed with two inputs:

- question
- answer


If you click the _Start Quiz_ button, a new screen will be displayed to start the quiz.

The Quiz screen contains:

- Number of questions
- Question
- Button to display the answer
- Correct Button
- Incorrect Button

After you finish the Quiz, you will have the score and two buttons:

- Go back to detail screen
- Restart the quiz


If you get one quiz done, all notifications will be cleared and a new one will be created for tommorrow.


### Author

This project is done by Oussema Hidri as the final project of the great Udacity React nanodegree course.


