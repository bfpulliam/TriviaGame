
	var question = 0;
	var time = 0;
	var wins = 0;
	var fails = 0;

	var questions = [
		{
			question:
				"Which hit song featured the following lyric - 'Get away from the pain that you drive into the heart of me'",
			answers: {
				a: "Run to you",
				b: "Last Christmas",
				c: "Teardrops",
				d: "Tainted love"
			},
			correctAnswer: "Tainted Love"
		},
		{
			question:
				"Who sang the title track of the late 80s James Bond film - Licence to Kill?",
			answers: {
				a: "Tina Turner",
				b: "Patti LaBelle",
				c: "Gladys Knight",
				d: "Shirley Bassey"
			},
			correctAnswer: "Gladys Knight"
		},
		{
			question:
				"The Magic Number was a 1989 hit for the band De La Soul. Which album of theirs did it appear on?",
			answers: {
				a: "3 Feet High and Rising",
				b: "Buhloone Mindstate",
				c: "De La Soul is Dead",
				d: "The Grind State"
			},
			correctAnswer: "3 Feet High and Rising"
		},
		{
			question:
				"Which 80s Clash song, when re-released in 1991, and became a hit -even in Spanish?",
			answers: {
				a: "London Calling",
				b: "Straight to Hell",
				c: "Rock the Casbah",
				d: "Should I Stay or Should I Go?"
			},
			correctAnswer: "Should I stay or Should I Go?"
		}
	];

	forEach (var i = 0; i < questions.length; i++;) {
	
	
			$("#questionDiv").text(questions.question[i]);
			$("#a").text(questions.question[i].answers.a);
			$("#b").text(questions.question[i].answers.b);
			$("#c").text(questions.question[i].answers.c);
			$("#d").text(questions.question[i].answers.d);
	};
		
		var correctAnswer = questions.question[i].correctAnswer;

		function questionContent() {
		if (text === correctAnswer) {
			$("#gameScreen").text("<p>" + "You got it right!");
			wins++;
			$("#win").text(wins);
			$("#gameScreen").append("<p>The answer was" + correctAnswer);
			setInterval(nextQuestion, 4000);
			question++;
		} else {
			$("#gameScreen").text("<p>" + "Nope, that's not it!");
			fails++;
			$("#gameScreen").append("<p>The answer was" + correctAnswer);
			setInterval(nextQuestion, 4000);
			questionCounter++;
		}
	}

	function userTimeout() {
		if (time === 0) {
			alert("You ran out of time!");
			fails++;
			$("#gameScreen").append("<p>The answer was" + correctAnswer);
			setTimeout(nextQuestion, 4000);
			questionCounter++;
		}
	}

	function resultsScreen() {
		if (wins => questions.length) {
			alert("Great job!!");
		} else {
			alert(
				"Hey man, I know the feeling.  I am on the struggle bus too!"
			);

			$("#gameScreen").append("Start Over?");
			gameReset();
			$("#start").click(nextQuestion);
		}
	}

	function timer() {
		clock = setInterval(countDown, 1000);
		function countDown() {
			if (time < 1) {
				clearInterval(clock);
				userTimeout();
			}
			if (time > 0) {
				time--;
			}
			$("#timer").html("<strong>" + time + "</strong>");
		}
	}

	function nextQuestion() {
		if (question[i] < questions.length) {
			time = 15;
			$("#gameScreen").text(time + " seconds left!");
			questionContent();
			timer();
			userTimeout();
		} else {
			resultsScreen();
		}
	}

	function gameReset() {
		time = 0;
		wins = 0;
		fails = 0;
		question = 0;
		startGame();
	}
	};

	function startGame() {
		$("#gameScreen").text(time + " seconds left!");
		questionContent();
		timer();
		userTimeout();
	}

	

	$("#gameScreen").on("click", ".answers", function() {
		var userGuess = $(this).text();
		if (userGuess === questions.question[i].correctAnswer) {
			clearInterval(clock);
			userWin();
		} else {
			clearInterval(clock);
			userLoss();
		}
	});

	



