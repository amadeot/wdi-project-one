$(document).ready(function() {
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
	humanClick=0;

	var startGame = function(event){	
		var addRemoveGoat=function(select,place){
			var addGoat = function(select,place){
			select.addClass(place);
		}
			var removeGoat = function(select,place){
				setTimeout(function(){
					select.removeClass(place)},[500]
				);
			}
			addGoat(select,place)
			removeGoat(select,place)
		}
		var addRandomGoatToPen = function(){
			var i=Math.floor(Math.random()*4);
			$goatPen.push($goatList[i]);
		}
		addRandomGoatToPen();
		var CompGoatSelector = function(){  
			for(computerClick;computerClick<$goatPen.length;computerClick++){
				if ($goatPen[computerClick].selector==="#goatOne"){
					addRemoveGoat($goatOne,'activateGoatOne');
				} else if ($goatPen[computerClick].selector==="#goatTwo"){
					addRemoveGoat($goatTwo,'activateGoatTwo');
				} else if ($goatPen[computerClick].selector==="#goatThree"){
					addRemoveGoat($goatThree,'activateGoatThree');
				} else if ($goatPen[computerClick].selector==="#goatFour"){
					addRemoveGoat($goatFour,'activateGoatFour');
				};
			};
		}
		setTimeout(function(){CompGoatSelector($goatPen[computerClick])},[500]);
		var goatSelector = function(event){
			if (event.target.id==='goatOne'){
				addRemoveGoat($goatOne,'activateGoatOne');
				$humanPen.push($goatOne);
			} else if (event.target.id==='goatTwo'){
				addRemoveGoat($goatTwo,'activateGoatTwo');
				$humanPen.push($goatOne);				
			} else if (event.target.id==='goatThree'){
				addRemoveGoat($goatThree,'activateGoatThree');
				$humanPen.push($goatThree);
			} else if (event.target.id==='goatFour'){
				addRemoveGoat($goatFour,'activateGoatFour');
				$humanPen.push($goatFour);
			};
		humanClick++};	
		$allGoats.on('click',goatSelector);
		var clickChecker = function(){
			for(counter;counter<$goatPen.length;counter++){
				if ($goatPen[counter].selector===$humanPen[counter].selector){
					console.log('great job');
				} else {
					console.log('failure')
				}
			}
		addRandomGoatToPen();}
		$allGoats.on('click',clickChecker)
	};
	$start.on('click',startGame);
});
