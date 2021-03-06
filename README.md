# Play card games in Augmented Reality!

An application that allows multiple players to play in Macau game in argumented reality, no paper cards are needed. Players give their names that will be visible on the chat that is common for everyone. A player can choose to take few of the following actions - take a card, throw a card, reshuffle. At the end the player can click "end turn" button to allow next of the players to start a turn.

### Game rules

No checking of the rules in the game - players set the rules themselves and keep to them. Application only checks whose turn is now.

### Quickstart

To start the game you must have node installed. Go to the server folder and run in the console

```
npm install
npm start
```

And run the same commands in the client folder on the device you want to run application. Application should start on localhost:8080. To see the deck you must direct the camera to the following image

![alt text](https://i.imgur.com/aieLXEn.png)

Application may not work on Google Chrome. It's best to try it on Mozilla Firefox.

### Created with

Application created with Node.js and Express.js, Socket.IO on server-side and AR.js, Webpack, SCSS on client-side.

![alt text](https://raw.githubusercontent.com/wjankowska/screenshots/master/ar-macau.png)

![alt text](https://raw.githubusercontent.com/wjankowska/screenshots/master/ar-macau2.png)
