$(document).ready(function(){
	console.log('linked!');
	var $allGoats = $('.button');
	var $goatOne = $('#goatOne');
	var $goatTwo = $('#goatTwo');
	var $goatThree = $('#goatThree');
	var $goatFour = $('#goatFour');
	var $start= $('#start')
	var removeGoat = function(select,place){
		setTimeout(function(){
			select.removeClass(place)},[500]
		)
	}
	var goatSelector = function(event){
		if (event.target.id==='goatOne'){
			$goatOne.addClass('activateGoatOne')
			removeGoat($goatOne,'activateGoatOne')
		} else if (event.target.id==='goatTwo'){
			$goatTwo.addClass('activateGoatTwo')
			removeGoat($goatTwo,'activateGoatTwo')
		} else if (event.target.id==='goatThree'){
			$goatThree.addClass('activateGoatThree')
			removeGoat($goatThree,'activateGoatThree')
		} else if (event.target.id==='goatFour'){
			$goatFour.addClass('activateGoatFour')
			removeGoat($goatFour,'activateGoatFour')
		}

	}

	var startGame = function(event){
		$allGoats.on('click',goatSelector)		
	}

	$start.on('click',startGame)





})