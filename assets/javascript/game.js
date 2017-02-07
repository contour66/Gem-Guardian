// First define your object(s)



// Now when the document is ready, initialize your jewels and your game.
$() {

});


// When a button is clicked, do something.
$("#jewels div").on("click", function() {
  console.log($(this));
  // Get the ID from $(this)
  // Call a function from your game object.
  // Update the dom using a jquery selector
});


window.addEventListener("DOMContentLoaded", function(){

	
	//This is my game object that contains the main properties and methods that are used to run.


//Array of letters that are used to be randomly generated
	
    //generates random number for main number
  	var random = Math.floor(Math.random() * 120) + 19;
    console.log ("Magic number " + random);
    
    //generates random number for jewels


    //   Math.floor(Math.random() * 12) + 1;
    // console.log( "first " + randomJewel);
    var randomJewel = {
        
      red: "",
      green: "",
      blue: "",
      gold: null,

      initJewels: function() {
        this.red = Math.floor(Math.random() * 12) + 1;
        this.green = Math.floor(Math.random() * 12) + 1;
        this.gold = Math.floor(Math.random() * 12) + 1;
        this.blue = Math.floor(Math.random() * 12) + 1;
      },
      //Generates random value for red jewel  
      // redJewel: function(){
      //   var rJewel = Math.floor(Math.random() * 12) + 1;
      //   this.red = rJewel;
      //   console.log( "Red " + newRed);
      

      // },

      // //Generates random value for green jewel 
      // greenJewel: function(){
      //   var gJewel = Math.floor(Math.random() * 12) + 1;
      //   this.green = gJewel;
      //   console.log( "Green " + gJewel);
      // },

      // //Generates random value for blue jewel 
      // blueJewel: function(){
      //   var bJewel = Math.floor(Math.random() * 12) + 1;
      //   this.blue = bJewel;
      //   // console.log( "Blue " + bJewel);
      //   // var newBlue = this.blue;
      //   //  console.log(newBlue + " before"); 
        

      // },

      // //Generates random value for gold jewel 
      // goldJewel: function(){
      //           this.gold = Math.floor(Math.random() * 12) + 1;;
      //           return this.gold;
      // }
    };


 randomJewel.initJewels();
 // console.log(gj);
 console.log("Red: " + randomJewel.red);
 console.log("Blue: " + randomJewel.blue);
 console.log("Gold: " + randomJewel.gold);
 console.log("Green: " + randomJewel.green);


// $("#blue").on('click', function(){
//     // var newBlue =  ($(this).val( randomJewel.blueJewel()));
//          var newBlue= randomJewel.blueJewel();
          
//         //   $( "" ).val( text );
//            console.log(newBlue + " after"); 
         
//           });

//  var newBlue = randomJewel.blueJewel();


// $("#blue").on('click', function(){
  
//  //      // var newBlue = randomJewel.blueJewel();
//  //      var newNumber = $("#newNumber");
         
//  // var numberDiv = newBlue; 
//           console.log(newBlue + " here it is") ; 
      
            //appends the number
      // newNumber.append(numberDiv);


  // });

/// make an on click function that displays the  number clicked
    // console.log(newRed + " newRed");

    // var  rJ = $("#red").val(newRed);


    // console.log(rJ) ;




    // var greenJ= randomJewel.greenJewel();
    // randomJewel.blueJewel();
    // randomJewel.goldJewel();

  	var game = {
  		wins: 0,    // Stores number of wins
  		losses: 0,  // Stores number of losses
  		points:"",  // number of points to add
  		mainNumber:"",
  
		// This clears and starts the game.
  		
  		startGame: function(){
  			console.log("New Game!");
  			//Sets wins to 0
  			this.wins =  0;
  			var elWins = document.getElementById("wins");
  			elWins.textContent = this.wins;
  			
  			this.losses=  0; //Sets losses to 0
  			var elWins = document.getElementById("losses");
 			elWins.textContent = game.losses;
  			
  			// this.guessesLeft =  10; //Sets guessLeft to 10
  			// var elWins = document.getElementById("guessesLeft");
  			// elWins.textContent = game.guessesLeft;
  			
  			this.points = " "; //Sets letters guessed to none
  			
  		},
  		
  		// This function subtracts 1 from the guessesLeft and updates it in the HTML
  		incorrectGuess: function(){
  			this.guessesLeft = this.guessesLeft - 1;
  			var elWins = document.getElementById("guessesLeft");
  			elWins.textContent = this.guessesLeft;
  			this.random;
  			
  			
  		},

  		/* This function checks if the guessesLeft is equal to 0.
  		If it is equal to 0 then it updates the losses by one.
  		Then it alerts the user the game is lost.
  		Next it resets guesses to 10 and updates it in the HTML.
  		*/
  		outOfGuesses: function(){

  			if (this.guessesLeft === 0) {
  				
  				this.losses=  this.losses + 1; //Adds to losses
  				var elWins = document.getElementById("losses");
 				elWins.textContent = game.losses;
  				alert("You got psyched!")
  				this.guessesLeft =  10; //Sets guessLeft to 10
  				var elWins = document.getElementById("guessesLeft");
  				elWins.textContent = game.guessesLeft;
  				this.lettersGuessed = " ";
  				var elWins = document.getElementById("lettersGuessed");
  				elWins.textContent = game.lettersGuessed;
  				random = letters[Math.floor(Math.random()* letters.length)];
  				console.log("Lose " + random);
  			}
  		},

  		// This function adds 1 to wins and updates it in the HTML
		correctGuess: function(){
			
  			this.wins = this.wins  + 1;
  			var elWins = document.getElementById("wins");
  			elWins.textContent = this.wins;
  			alert("You are psychic!")
  			this.lettersGuessed = " ";
  			var elWins = document.getElementById("lettersGuessed");
  			elWins.textContent = this.lettersGuessed;
  			this.guessesLeft =  10; //Sets guessLeft to 10
  			var elWins = document.getElementById("guessesLeft");
  			elWins.textContent = game.guessesLeft;
  			random = letters[Math.floor(Math.random()* letters.length)];
  			console.log("Win " + random);
  		},

  	};		


	// game.startGame();
	// console.log(game.losses);
	// console.log(game.wins);

	
  	  	//Listens for key press to start game
  // 	  	document.onkeyup\ = function(event) {
  //    	var userInput = event.key.toUpperCase();
   
   		
     	
  //    	//Variable to check keys typed are A-Z only
		// var inp = String.fromCharCode(event.keyCode);

		// // If statement checks if keys Alpha and then goes to next if statement
		// if (/[A-Z]/.test(inp)){
		
		// 	//If the users guess does not equal the random letter chosen
		// 	if (userInput!== random) {
  //   			//console.log(userInput);
    			
  //   			//run the method incorrect guess;
  //   			game.incorrectGuess();
    			
  //   			// uses jQuery to pull the lettsGuessed id
  //   			var elGuessDiv = $("#lettersGuessed");

  //   				//creates a new div to place each letter
  //   				var newLetters= $("<div>" + userInput + "</div>");
  				
  // 					//appends the letter 
  // 					 elGuessDiv.append(userInput);
    			
  // 				//run the method to see if the user is out of guesses and starts new game
  //   			game.outOfGuesses();

    			
    			
  //   		}

  //   		//Checks to see if key pressed is equal to the random number.
  //   		else if (userInput === random) {
    			
  //   			console.log(userInput);
    			
  //   			//Runs the method to update wins and start new game.
  //   			game.correctGuess();	
  //   		}
  // 		}
  		
  // 		//Checks to see if its not an alpha key that was pressed
  // 		else {
      		
  //     		//Alerts user to press another key
  //     		alert("That's not a letter!");
  //     	}
  
 	// };
  
});
  