console.log('linked!');

var $allGoats;
var $goatOne;
var $goatTwo;
var $goatThree;
var $goatFour;
var $start;
var $goatList;
var $goatPen;
var $humanPen;
var counter = 0;

//defining a few variables globally

$(document).ready(function() {
	var clip1 = new Audio('GoatScream01.mp3');
	var clip2 = new Audio('GoatScream02.mp3');
	var clip3 = new Audio('GoatScream03.mp3');
	var clip4 = new Audio('GoatScream04.mp3');
				
	$allGoats = $('.goatButton');
	$goatOne = $('#goatOne');
	$goatTwo = $('#goatTwo');
	$goatThree = $('#goatThree');
	$goatFour = $('#goatFour');
	$start = $('#start');
	$goatList = [$goatOne, $goatTwo, $goatThree, $goatFour];
	$goatPen = [];
	$humanPen = [];
	$highScore = $('#highScore');
	highScoreInt = 3;
	$highScoreName = $('#highScoreName');
	$currScore = $('#counter');
	score = 0;
	$playerName = $('#playerName');

//all variables used above
	var startGame = function(event){	//nothing starts until the startgame function runs
		
		var addRemoveGoat=function(select,place){//this is the process to make a goat flash for a human
			var addGoat = function(select,place){//this is the part where it flashes on
				select.addClass(place);
			};

			var removeGoat = function(select,place){//this is the part where it flashes off
				setTimeout(function(){
					select.removeClass(place);
				}, 500);
			};
			addGoat(select,place);//calling functions in functions for this
			removeGoat(select,place);
		};

		var removeComputerGoat = function(goat, i) {//this removes the computer goat flash for computer
			window.setTimeout(function(){
				goat.removeClass('activate');
			}, (i+1)*500);
		};

		var addComputerGoat= function(goat, i) {//this adds computer goat flash for computer
			window.setTimeout(function(){
				goat.addClass('activate');
				removeComputerGoat(goat,i);
			}, (i+1)*500);
		};

		var compGoatSelector = function(){//this function adds and removes goat flash for computer
			for (var i = 0; i < $goatPen.length; i++){
				var goat = $goatPen[i];
				addComputerGoat(goat,i);
			}
		};

		var addGoatToPen = function(){//this is how to add a random goat to the list of goats to click
			var goatNumber = Math.floor(Math.random()*4);
			$goatPen.push($goatList[goatNumber]);
		};
	
		addGoatToPen();//callin it to start off the game
		
		setTimeout(function(){
			compGoatSelector();
		}, 500);//callin it with a slight delay

		var goatSelector = function(event){//this is how the human clicks work
			// TODO research switch statements
			if (event.target.id === 'goatOne'){
				addRemoveGoat($goatOne,'activate');
				$humanPen.push($goatOne);
				clip1.play();
			} else if (event.target.id === 'goatTwo'){
				addRemoveGoat($goatTwo,'activate');
				$humanPen.push($goatTwo);
				clip2.play();				
			} else if (event.target.id === 'goatThree'){
				addRemoveGoat($goatThree,'activate');
				$humanPen.push($goatThree);
				clip3.play();
			} else if (event.target.id === 'goatFour'){
				addRemoveGoat($goatFour,'activate');
				$humanPen.push($goatFour);
				clip4.play();
			}
		};

		$allGoats.on('click', goatSelector);//callin it

		var clickChecker = function(){
			if($humanPen.length < $goatPen.length){
				console.log('human is less than goat');
				if($goatPen[counter].selector !== $humanPen[counter].selector){
					console.log('fail');
					if (score > highScoreInt){
						$highScore.text(score);
						highScoreInt=score;
						$highScoreName.text($playerName.val());
						alert('Congrats '+$playerName.val()+'! You have beaten the high score. Hit start to try again!');
						$playerName.val('');
						$goatPen = [];
						$humanPen = [];
						score = 0;
						counter = 0;
					} else if (highScoreInt >= score) {						
						alert('Hit start to try again!');
						$goatPen = [];
						$humanPen = [];
						score = 0;
						counter = 0;		
					}
				} else if ($goatPen[counter].selector === $humanPen[counter].selector){
					console.log('keep going');
					counter++;
				}
			}else if ($humanPen.length === $goatPen.length){
				console.log('hit the right length');
				if ($goatPen[counter].selector !== $humanPen[counter].selector){
					console.log('fail');
					if (score > highScoreInt){
						$highScore.text(score);
						highScoreInt=score;
						$highScoreName.text($playerName.val());
						alert('Congrats '+$playerName.val()+'! You have beaten the high score. Hit start to try again!');
						$playerName.val('');
						$goatPen = [];
						$humanPen = [];
						score = 0;
						counter = 0;
					} else if (highScoreInt >= score) {
						alert('Hit start to try again!');
						$goatPen = [];
						$humanPen = [];
						score = 0;
						counter = 0;					
					}
				} else if ($goatPen[counter].selector === $humanPen[counter].selector){
					console.log('great job');
					addGoatToPen();
					setTimeout(function(){compGoatSelector();},500);
					$humanPen= [];
					score++;
					$currScore.text(score);
				}
			counter=0;
			}
		};

		$allGoats.on('click',clickChecker);
	};

	$start.on('click',startGame);
});
