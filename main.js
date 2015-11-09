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
var computerClick;

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
	computerClick = 0;
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

		var addGoatToPen = function(){//this is how to add a random goat to the list of goats to click
			var goatNumber = Math.floor(Math.random()*4);
			$goatPen.push($goatList[goatNumber])
		}
		
		addGoatToPen();//callin it to start off the game
		
		var compGoatSelector = function(){  //computer goes first, runs through list of goats in the pen
			while(computerClick < $goatPen.length){
				if ($goatPen[computerClick].selector === "#goatOne"){
					addRemoveGoat($goatOne,'activate');
					audio.play();
				} else if ($goatPen[computerClick].selector === "#goatTwo"){
					addRemoveGoat($goatTwo,'activate');
					audio.play();
				} else if ($goatPen[computerClick].selector === "#goatThree"){
					addRemoveGoat($goatThree,'activate');
					audio.play();
				} else if ($goatPen[computerClick].selector === "#goatFour"){
					addRemoveGoat($goatFour,'activate');
					audio.play();
				}
				computerClick++;
			}
			computerClick = 0;
		};
		
		setTimeout(function(){
			compGoatSelector($goatPen[computerClick]);
		}, [500]);//callin it with a slight delay

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
						}, counter+1 * 500);

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
