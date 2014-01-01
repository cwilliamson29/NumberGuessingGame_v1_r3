/* Creator:         Chris Williamson
 * Email:           chriswill0629@gmail.com
 * Date(original):  12/26/2013
 * Date(Revision1): 12/30/2013
 * Date(Revision2): 13/31/2013
 *      ChangeLog:  -Separated game into different functions
 *                  -Removed a few loops and arrays  
 *                R2-Moved player names and number guesses into objects
 *                R2-Added if statement to allow only 1-4 players.
 * Purpose:         A simple javascript number guessing game
 */

var gameExit = "NO";

// Define Players array and class
var dealer;
var numberOfPlayers;
var players = ["player1", "player2", "player3", "player4"];
function Player(name, guess) {
    this.name = name;
    this.guess = guess;
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
    var win = false;
    for (var i = 0; i < numberOfPlayers; i++) {
        if (players[i].guess === dealer) {
            win = true;
            document.writeln(players[i].name + " won!" + "<br>");
        }
    }
    if (win === false) {
        document.writeln("Dealer has won!" + "<br>");
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
    document.writeln("<br>Dealer : " + dealer + "<br>");
    for (var i = 0; i < numberOfPlayers; i++) {
        document.writeln(players[i].name + " " + ": " + players[i].guess + "<br>");
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