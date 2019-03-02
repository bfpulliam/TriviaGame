var intervalId;
var questCounter = 0;
var answeredCorrect = 0;
var answeredWrong = 0;
var unAnswered = 0;
var currentQuestion;
var allQuestions = [
	{
		questionText: "Which hit song featured the following lyric - 'Get away from the pain that you drive into the heart of me'",
		answer1: "Run to you",
		answer2: "Last Christmas",
		answer3: "Teardrops",
		answer4: "Tainted love",
		correctAnswer: "Tainted Love"
	},
	{
		question: "Who sang the title track of the late 80s James Bond film - Licence to Kill?",
		answer1: "Tina Turner",
		answer2: "Patti LaBelle",
		answer3: "Gladys Knight",
		answer4: "Shirley Bassey",
		correctAnswer: "Gladys Knight"
	},
	{
		question: "The Magic Number was a 1989 hit for the band De La Soul. Which album of theirs did it appear on?",
		answer1: "3 Feet High and Rising",
		answer2: "Buhloone Mindstate",
		answer3: "De La Soul is Dead",
		answer4: "The Grind State",
		correctAnswer: "3 Feet High and Rising"
	},
	{
		question: "Which 80s Clash song, when re-released in 1991, and became a hit -even in Spanish?",
		answer1: "London Calling",
		answer2: "Straight to Hell",
		answer3: "Rock the Casbah",
		answer4: "Should I Stay or Should I Go?",
		correctAnswer: "Should I stay or Should I Go?"
	}
];
var questionsLength = allQuestions.length;


// Function called when an answered is guessed correctly.  Hides buttons, displays further info on the correct guess, increments the appropriate counters, and checks to see if max number off questions has been reached.  If questCounter == questionsLength, then the game if over and endScreen() is called.  If not, then a new questions is displayed.
function correctAnswer(){
	$(".button").off("click");
	$(".answerbtns").hide();
	questCounter++;
	answeredCorrect++;
	clearInterval(intervalId);
	if ( questCounter == questionsLength){  
		setTimeout(endScreen, 1000 * 4);
	} else {
		setTimeout(displayQuestion, 1000 * 4);
	}
};

// Function that is called on a wrong answer.  Hides buttons, displays "Wrong Answer!", increments the appropriate counters, and checks to see if max number off questions has been reached.  If questCounter == questionsLength, then the game if over and endScreen() is called.  If not, then a new questions is displayed.
function wrongAnswer(){
	$(".button").off("click");
	$(".answerbtns").hide();
	$(".question").text("Wrong Answer!");
	questCounter++;
	answeredWrong++
	clearInterval(intervalId);
	if ( questCounter == questionsLength){
		setTimeout(endScreen, 1000 * 2);
	} else {
		setTimeout(displayQuestion, 1000 * 2);
	}
	
};

// Function that is called when the 11second timer runs out.  Hides buttons, displays "Time's Up!", increments the appropriate counters, and checks to see if max number off questions has been reached.  If questCounter == questionsLength, then the game if over and endScreen() is called.  If not, then a new questions is displayed.
function noTime(){
	$(".button").off("click");
	$(".question").text("Time's Up!");
	$(".answerbtns").hide();
	questCounter++;
	unAnswered++
	clearInterval(intervalId);
	if ( questCounter == questionsLength){
		setTimeout(endScreen, 1000 * 2);
	} else {
		setTimeout(displayQuestion, 1000 * 2);
	};
};

//Function that is called when all questions have been answered.  Plays the Monday Night Football theme and displays the users stats.  If they click the 'Play again' button, stats are reset, the music stops, and the first questions is displayed 
function endScreen(){
	$(".answerbtns").show();
	$(".question").text("That's the end of the game! Here's how you did:");
	$(".answer-1").text("Correct answers: " + answeredCorrect );
	$(".answer-2").text("Wrong answers: " + answeredWrong );
	$(".answer-3").text("Unanswered: " + unAnswered );
	$(".answer-4").text(" Click Here To Play Again");
	$(".answer-4").on("click", function(){
		gameReset();
		displayQuestion();
 	});
};
//function called if the user clicks "play again" on the end screen.  Resets all pertinent variable to 0
function gameReset() {
	 questCounter = 0;
	 answeredCorrect = 0;
	 answeredWrong = 0;
	 unAnswered = 0;

	 return questCounter;
	 return answeredCorrect;
	 return answeredWrong;
	 return unAnswered;
};
//function that displays the timer and the current question (based on questCounter)
function displayQuestion() {
	
	var timer = 11;
	//decrease timer and display it on screen in the timer div
	intervalId = setInterval(decrement, 1000);
	function decrement() {
      timer--;
      $(".timer").html(timer);
      // if the timer reaches 0, call noTime()
      if (timer === 0) {
      	noTime();
      };
  	};
   	//added this as it seemed like the previous click was getting carried over
	$(".button").off("click"); 
	//display and style the current question
	$(".question").text(allQuestions[questCounter].questionText);
	//show all the buttons and their answers
	$(".answerbtns").show();
	$(".answer-1").text(allQuestions[questCounter].answer1);
	$(".answer-2").text(allQuestions[questCounter].answer2);
	$(".answer-3").text(allQuestions[questCounter].answer3);
	$(".answer-4").text(allQuestions[questCounter].answer4);
	//display correctAnswer() or wrongAnswer() depending on if the text for the button clicked matches the value of the correctAnswer
	$(".button").on("click", function(){
	 	if ($(this).text() == allQuestions[questCounter].correctAnswer){
	 		correctAnswer();
	 	} else {
	 		wrongAnswer();
	 	}
 	});
};
//display the start screen and display a questions once the button is clicked
$(document).ready(function() {
	$(".answer-1").text("Click Here To Start!");
	$(".answer-2").hide();
	$(".answer-3").hide();
	$(".answer-4").hide();
	$(".button").on("click", function(){
		$(".answer-2").show();
		$(".answer-3").show();
		$(".answer-4").show();
		displayQuestion();
	});
});