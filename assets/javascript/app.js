var intervalId;
var questCounter = 0;
var answeredCorrect = 0;
var answeredWrong = 0;
var currentQuestion;
var allQuestions = [{
		questionText: "Which hit song featured the following lyric - 'Get away from the pain that you drive into the heart of me'",
		answer1: "Run to you",
		answer2: "Last Christmas",
		answer3: "Teardrops",
		answer4: "Tainted love",
		correctAnswer: "d",
		correctText: "Tainted Love"
	},
	{
		questionText: "Who sang the title track of the late 80s James Bond film - Licence to Kill?",
		answer1: "Tina Turner",
		answer2: "Patti LaBelle",
		answer3: "Gladys Knight",
		answer4: "Shirley Bassey",
		correctAnswer: "c",
		correctText: "Gladys Knight"
	},
	{
		questionText: "The Magic Number was a 1989 hit for the band De La Soul. Which album of theirs did it appear on?",
		answer1: "3 Feet High and Rising",
		answer2: "Buhloone Mindstate",
		answer3: "De La Soul is Dead",
		answer4: "The Grind State",
		correctAnswer: "a",
		correctText: "3 Feet High and Rising"
	},
	{
		questionText: "Which 80s Clash song, when re-released in 1991, and became a hit -even in Spanish?",
		answer1: "London Calling",
		answer2: "Straight to Hell",
		answer3: "Rock the Casbah",
		answer4: "Should I Stay or Should I Go?",
		correctAnswer: "d",
		correctText: "Should I stay or Should I Go?"
	}
];
var questionsLength = allQuestions.length;

function correctAnswer() {
	$(".button").off("click");
	$(".question").text("YOU GOT IT DUDE!");
	$(".answerbtns").hide();
	questCounter++;
	answeredCorrect++;
	clearInterval(intervalId);
	setInterval(intervalId);
	if (questCounter == questionsLength) {
		setTimeout(endScreen, 1000 * 4);
	} else {
		setTimeout(displayQuestion, 1000 * 4);
	};
};

function wrongAnswer() {
	$(".button").off("click");
	$(".answerbtns").hide();
	$(".question").text("Wrong Answer!");
	questCounter++;
	answeredWrong++;
	clearInterval(intervalId);
	setInterval(intervalId);
	if (questCounter == questionsLength) {
		setTimeout(endScreen, 1000 * 2);
	} else {
		setTimeout(displayQuestion, 1000 * 2);
	};
};

function noTime() {
	$(".button").off("click");
	$(".question").text("Time's Up!");
	$(".answerbtns").hide();
	questCounter++;
	answeredWrong++;
	clearInterval(intervalId);
	if (questCounter == questionsLength) {
		setTimeout(endScreen, 1000 * 2);
	} else {
		timer
		setTimeout(displayQuestion, 1000 * 2);
	};
};

function endScreen() {
	$(".btn").hide();
	$(".question").text("That's the end of the game! Here's how you did:");
	$(".cans").text("Correct answers: " + answeredCorrect);
	$(".wans").text("Wrong answers: " + answeredWrong);
	$(".again").text(" Click Here To Play Again").css(".btn-lg");
	$(".again").on("click", function () {
		gameReset();
		displayQuestion();
	});
};

function gameReset() {
	questCounter = 0;
	answeredCorrect = 0;
	answeredWrong = 0;
	return questCounter;
};

function displayQuestion() {
	var timer = 10;

	intervalId = setInterval(decrement, 1000);

	function decrement() {
		timer--;
		$(".timer-text").text("Time:" + " " + timer);
		if (timer === 0) {
			noTime();
		};
	};
	$(".button").off("click");
	$(".question").text(allQuestions[questCounter].questionText);
	$(".answerbtns").show();
	$(".answer-1").text(allQuestions[questCounter].answer1);
	$(".answer-2").text(allQuestions[questCounter].answer2);
	$(".answer-3").text(allQuestions[questCounter].answer3);
	$(".answer-4").text(allQuestions[questCounter].answer4);
	$(".btn").on("click", function () {
		if ($(this).data("letter") == allQuestions[questCounter].correctAnswer) {
			correctAnswer();
		} else {
			wrongAnswer();
		}
	});
};
$(document).ready(function () {
	$(".btn-block").text("Click here to Start!");
	$(".answer-1").hide();
	$(".answer-2").hide();
	$(".answer-3").hide();
	$(".answer-4").hide();
	$(".btn-block").on("click", function () {
		$(".btn-block").hide();
		$(".answer-1").show();
		$(".answer-2").show();
		$(".answer-3").show();
		$(".answer-4").show();
		displayQuestion();
	});
});