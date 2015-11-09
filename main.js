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

$(document).ready(function() {
	var audio = new Audio('TheScreamingSheep.mp3');
	$allGoats = $('.goatButton');
	$goatOne = $('#goatOne');
	$goatTwo = $('#goatTwo');
	$goatThree = $('#goatThree');
	$goatFour = $('#goatFour');
	$start = $('#start');
	$goatList = [$goatOne, $goatTwo, $goatThree, $goatFour];
	$goatPen = [];
	$humanPen = [];
	$highScore = $('#highScore')
	highScoreInt = 3
	$highScoreName = $('#highScoreName');
	$currScore = $('#counter')
	score = 0
	$playerName = $('#playerName')
//all variables used above
	var startGame = function(event){	//nothing starts until the startgame function runs
		
		var addRemoveGoat=function(select,place){//this is the process to make a goat flash
			var addGoat = function(select,place){//this is the part where it flashes on
				select.addClass(place);
			};

			var removeGoat = function(select,place){//this is the part where it flashes off
				setTimeout(function(){
					select.removeClass(place);
				}, 250);
			};
			addGoat(select,place);//calling functions in functions for this
			removeGoat(select,place);
		};
		var timer = function(){
			console.log('time')
		}

		var removeComputerGoat = function(goat, i) {
			window.setTimeout(function(){
				goat.removeClass('activate')
			}, (i+1)*500)
		};

		var addComputerGoat= function(goat, i) {
			window.setTimeout(function(){
				goat.addClass('activate')
				removeComputerGoat(goat,i)
			}, (i+1)*500)
		}

		var compGoatSelector = function(){
			for (var i = 0; i < $goatPen.length; i++){
				var goat = $goatPen[i];
				addComputerGoat(goat,i)
			}
		}

		var addGoatToPen = function(){//this is how to add a random goat to the list of goats to click
			var goatNumber = Math.floor(Math.random()*4);
			$goatPen.push($goatList[goatNumber])
		}
	
		addGoatToPen();//callin it to start off the game
		
		setTimeout(function(){
			compGoatSelector();
		}, 500);//callin it with a slight delay

		var goatSelector = function(event){//this is how the human clicks work
			// TODO research swtich statements
			if (event.target.id === 'goatOne'){
				addRemoveGoat($goatOne,'activate');
				$humanPen.push($goatOne);
				audio.play();
			} else if (event.target.id === 'goatTwo'){
				addRemoveGoat($goatTwo,'activate');
				$humanPen.push($goatTwo);
				audio.play();				
			} else if (event.target.id === 'goatThree'){
				addRemoveGoat($goatThree,'activate');
				$humanPen.push($goatThree);
				audio.play();
			} else if (event.target.id === 'goatFour'){
				addRemoveGoat($goatFour,'activate');
				$humanPen.push($goatFour);
				audio.play();
			}
		};

		$allGoats.on('click', goatSelector);//callin it

		var clickChecker = function(){//this checks the human clicks against the computer clicks
			if($goatPen.length === $humanPen.length){
				for(var counter = 0; counter < $humanPen.length; counter++){
					if ($goatPen[counter].selector === $humanPen[counter].selector){
						console.log('great job');
						addGoatToPen();
						
						setTimeout(function(){
							compGoatSelector()
						}, 500);

						$humanPen = [];
						score++;
						$currScore.text(score);
					} else {
						console.log('failure');
						if( score > highScoreInt) {
							$highScore.text(score)
							highScoreInt = score;
							return $highScoreName.text($playerName.val())
						}
						break;
					}
				}
			} else {
				console.log('keep going');
			}
		};
		

		$allGoats.on('click',clickChecker);
	};

	$start.on('click',startGame);
});
