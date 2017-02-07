// This object generates the random numbers that will be assigned to jewels
// and it assigns a random number to the main number
  var randomJewel = {
        
      red: null,
      green: null,
      blue: null,
      gold: null,
      magicNumber: null,

      initJewels: function() {
        this.red = Math.floor(Math.random() * 12) + 1;
        this.green = Math.floor(Math.random() * 12) + 1;
        this.blue = Math.floor(Math.random() * 12) + 1;
        this.gold = Math.floor(Math.random() * 12) + 1;
        this.magicNumber = Math.floor(Math.random() * 120) + 19;
        console.log("Magic number: " + randomJewel.magicNumber);
        console.log("Red: " + randomJewel.red);
        console.log("Green: " + randomJewel.green);
        console.log("Blue: " + randomJewel.blue);
        console.log("Gold: " + randomJewel.gold); 
        $("#magicNumber").text(this.magicNumber);
      },


    };

//This is my game object that contains the main properties and methods that are used to run.
  var game = {
      wins: 0,    // Stores number of wins
      losses: 0,  // Stores number of losses
      userNumber: null, //Stores user number as it progresses.
  
    // This starts the game.
      startGame: function(){
        console.log("New Game!");
                        
        this.wins =  0; //Sets wins to 0
        $("#wins").text(this.wins);  // Appends wins
        this.losses = 0; //Sets losses to 0
        $("#losses").text(this.losses); // Appends losses      
      },
      
      //This method runs when a game is won
      winGame: function(){
        this.wins += 1; //Updates wins by 1
        $("#wins").text(this.wins); //Appends wins
      },

      //This method is run when the game is lost.
      loseGame: function(){
        this.losses += 1;  //Updates losses by 1
        $("#losses").text(this.losses); //Appends losses
      },

      //This method resets userNumber to nulls 
      reset: function() {
        this.userNumber = null; //Sets user number to blank
         $("#userNumber").text(this.userNumber); //Appends blank
      }

    };  

//Waits for document to be ready.
$(document).ready(function(){

  //Runs start game method and clears wins losses.
  game.startGame();
  
  //Runs method to generate random values for jewels.
  randomJewel.initJewels();

  // This function looks for a click among the jewels buttons.
  $("#jewels button").on("click", function() {

    //This variable selects the specific button pressed (this) and gets the value 
    //through the id (attr)
    var gem = $(this).attr("id");
    
    //Logs the color of the jewel that is clicked
    console.log("Color: " + gem);

    //Logs the value of the jewel that is clicked
    console.log("Color value: " + randomJewel[gem]);

    //This takes the current userNumber and adds it to the old 
    //userNumber to create the new userNumber 
    game.userNumber += randomJewel[gem];

    console.log("New user number: " + game.userNumber);

    //Checks if the current user number matches the jewel number
    if (game.userNumber === randomJewel.magicNumber){
      $("#userNumber").text(game.userNumber);  //Appends the user number.
      game.winGame();                          //Runs method to add 1 win.
      console.log("Game won");
      game.reset();                            //Runs method to reset game.
      randomJewel.initJewels();                //Runs method to randomize jewels.
    }
    
    else if (game.userNumber > randomJewel.magicNumber) {
      $("#userNumber").text(game.userNumber);  //Appends the user number.
      game.loseGame();                         //Runs method to add 1 loss.
      console.log("Game lost");               
      game.reset();                            //Runs method to reset game.
      randomJewel.initJewels();                //Runs method to randomize jewels.
    }
    
    else {
       $("#userNumber").text(game.userNumber); //Appends the user number.
    }


  });


});

	