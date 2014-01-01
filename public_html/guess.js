/* Creator:         Chris Williamson
 * Email:           chriswill0629@gmail.com
 * Date(original):  12/26/2013
 * Date(Revision1): 12/30/2013
 * Date(Revision2): 13/31/2013
 *      ChangeLog:  -Separated game into different functions
 *                  -Removed a few loops and arrays  
 *                R2-Moved player names and number guesses into objects
 *                R2-Added if statement to allow only 1-4 players.
 *                R3-Fixed a bug where the game would not allow any player to win
 *                R3-Added a feature to keep score of all the wins
 * Purpose:         A simple javascript number guessing game
 */

var gameExit = "NO";
var win;

// Define Players array and class
var dealer, dealerScore = 0;
var numberOfPlayers;
var players = ["player1", "player2", "player3", "player4"];
function Player(name, guess) {
    this.name = name;
    this.guess = guess;
    this.score = 0;
}

// Dealer number
function Dealer() {
    dealer = Math.floor(Math.random() * 11);
    if (dealer === 0) {
        dealer++;
    }
}

// Defining player names and 1st number guess
function PlayerStat() {
    for (var i = 0; i < numberOfPlayers; i++) {
        players[i] = new Player(prompt("What is player " + (i + 1) + "'s name?"), prompt("What is player " + (i + 1) + "'s number guess?"));
    }
}

// Defining the next round of number guesses
function PlayerNumber() {
    for (var i = 0; i < numberOfPlayers; i++) {
        players[i].guess = (prompt("What is player " + (i + 1) + "'s number guess?"));
    }
}

// Winner Function
function Winner() {
    win = false;
    for (var i = 0; i < numberOfPlayers; i++) {
        if (players[i].guess == dealer) {   // Using == instead of === due to the prompt making
            win = true;                     // the players number guess a string instead of a integer
            document.writeln("<br>" + players[i].name + " won!" + "<br>");
            players[i].score++;
        } 
    }
    if (win === false) {
        document.writeln("<br>Dealer has won!" + "<br>");
        dealerScore++;
    }
}


// Game Exit function
function GameExit() {
    var noData = true;
    while (noData) {
        var gExit = prompt("Would you like to exit the game?");
        gExit = gExit.toUpperCase();
        switch (gExit) {
            case "YES":
                noData = false;
                return "YES";
                break;
            case "NO":
                noData = false;
                return "NO";
                break;
            default:
                alert("Invalid entry, try again!");
                break;
        }
    }
}

// Print function for the player and dealer numbers
function PrintNumbers() {
    document.writeln("<br>Dealer : " + dealer + " - Score: " + dealerScore + "<br>");
    for (var i = 0; i < numberOfPlayers; i++) {
        document.writeln(players[i].name + " " + ": " + players[i].guess + " - Score: " + players[i].score + "<br>");
    }
}

//Start Games
function NumberGuess() {
    var k = true;
    while (k) {
        numberOfPlayers = prompt("How many players? Between 1 - 4");
        if (numberOfPlayers > 0 && numberOfPlayers <= 4) {
            k = false;
            PlayerStat();
            while (gameExit === "NO") {
                Dealer();
                Winner();
                PrintNumbers();
                gameExit = GameExit();
                if (gameExit === "NO") {
                    PlayerNumber();
                }
            }
        } else {
            alert("Invalid entry, Try again!");
        }
    }
}