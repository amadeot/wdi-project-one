$(document).ready(function() {
	var audio = new Audio('TheScreamingSheep.mp3');
	console.log('linked!');
	$allGoats = $('.goatButton');
	$goatOne = $('#goatOne');
	$goatTwo = $('#goatTwo');
	$goatThree = $('#goatThree');
	$goatFour = $('#goatFour');
	$start = $('#start');
	$goatList = [$goatOne,$goatTwo,$goatThree,$goatFour];
	$goatPen = [];
	$humanPen = []; 
	counter=0;
	computerClick=0;
	$highScore=$('h2#highScore')
	highScoreInt=3
	$highScoreName=$('h2#highScoreName')
	$currScore=$('h2#counter')
	score=0
	$playerName=$('input#playerName')
//all variables used above
	var startGame = function(event){	//nothing starts until the startgame function runs
		var addRemoveGoat=function(select,place){//this is the process to make a goat flash
			var addGoat = function(select,place){//this is the part where it flashes on
			select.addClass(place);
		};
			var removeGoat = function(select,place){//this is the part where it flashes off
				setTimeout(function(){
					select.removeClass(place);},[250]
				);
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
			while(computerClick<$goatPen.length){
				if ($goatPen[computerClick].selector==="#goatOne"){
					addRemoveGoat($goatOne,'activateGoatOne');
					audio.play();
				} else if ($goatPen[computerClick].selector==="#goatTwo"){
					addRemoveGoat($goatTwo,'activateGoatTwo');
					audio.play();
				} else if ($goatPen[computerClick].selector==="#goatThree"){
					addRemoveGoat($goatThree,'activateGoatThree');
					audio.play();
				} else if ($goatPen[computerClick].selector==="#goatFour"){
					addRemoveGoat($goatFour,'activateGoatFour');
					audio.play();
				}
			computerClick++}
			computerClick=0
		};
		setTimeout(function(){compGoatSelector($goatPen[computerClick]);},[500]);//callin it with a slight delay

		var goatSelector = function(event){//this is how the human clicks work
			if (event.target.id==='goatOne'){
				addRemoveGoat($goatOne,'activateGoatOne');
				$humanPen.push($goatOne);
				audio.play();
			} else if (event.target.id==='goatTwo'){
				addRemoveGoat($goatTwo,'activateGoatTwo');
				$humanPen.push($goatTwo);
				audio.play();				
			} else if (event.target.id==='goatThree'){
				addRemoveGoat($goatThree,'activateGoatThree');
				$humanPen.push($goatThree);
				audio.play();
			} else if (event.target.id==='goatFour'){
				addRemoveGoat($goatFour,'activateGoatFour');
				$humanPen.push($goatFour);
				audio.play();
			}
		};

		$allGoats.on('click',goatSelector);//callin it
		var clickChecker = function(){//this checks the human clicks against the computer clicks
			if($goatPen.length === $humanPen.length){
				for(counter;counter<$humanPen.length;counter++){
					if ($goatPen[counter].selector===$humanPen[counter].selector){
						console.log('great job');
						addGoatToPen()
						setTimeout(compGoatSelector($goatPen),500);
						counter=0
						$humanPen=[]
						score++
						$currScore.text(score)
					} else {
						console.log('failure');
							if(score>highScoreInt){
							$highScore.text(score)
							highScoreInt=score
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
