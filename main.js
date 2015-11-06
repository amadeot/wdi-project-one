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
	var goatSelector = function(event){
		if (event.target.id==='goatOne'){
			addRemoveGoat($goatOne,'activateGoatOne');
		} else if (event.target.id==='goatTwo'){
			addRemoveGoat($goatTwo,'activateGoatTwo');
		} else if (event.target.id==='goatThree'){
			addRemoveGoat($goatThree,'activateGoatThree');
		} else if (event.target.id==='goatFour'){
			addRemoveGoat($goatFour,'activateGoatFour');
		}
	}	
	$allGoats.on('click',goatSelector);
	var addRandomGoatToPen = function(){
		var i=Math.floor(Math.random()*4);
		$goatPen.push($goatList[i]);
	}
	addRandomGoatToPen();
	$firstGoat = $goatPen[0];
	var CompGoatSelector = function($firstGoat){  
		if ($firstGoat.selector==="#goatOne"){
			addRemoveGoat($goatOne,'activateGoatOne');
		} else if ($firstGoat.selector==="#goatTwo"){
			addRemoveGoat($goatTwo,'activateGoatTwo');
		} else if ($firstGoat.selector==="#goatThree"){
			addRemoveGoat($goatThree,'activateGoatThree');
		} else if ($firstGoat.selector==="#goatFour"){
			addRemoveGoat($goatFour,'activateGoatFour');
		};
	};
	CompGoatSelector($firstGoat);

	var clickRightGoat = function(event){
		if(event.target.id===$firstGoat.selector.replace('#','')){
			addRandomGoatToPen()
		} else {
			alert("WRONG GOAT TRY AGAIN")
		}
	}
	$allGoats.on('click',clickRightGoat)
};
$start.on('click',startGame);
});
