$(document).ready(function(){
	console.log('linked!');
	var $allGoats = $('.button');
	var $goatOne = $('#goatOne');
	var $goatTwo = $('#goatTwo');
	var $goatThree = $('#goatThree');
	var $goatFour = $('#goatFour');
	var $start= $('#start')

	var goatPen = [$goatOne,$goatTwo,$goatThree,$goatFour]
	var usedGoats = []

	var startGame = function(event){	
		var addRemoveGoat=function(select,place){
			var addGoat = function(select,place){
			select.addClass(place)
		}
			var removeGoat = function(select,place){
				setTimeout(function(){
					select.removeClass(place)},[500]
				)
			}
			addGoat(select,place)
			removeGoat(select,place)
		}
		var goatSelector = function(event){
			if (event.target.id==='goatOne'){
				addRemoveGoat($goatOne,'activateGoatOne')
			} else if (event.target.id==='goatTwo'){
				addRemoveGoat($goatTwo,'activateGoatTwo')
			} else if (event.target.id==='goatThree'){
				addRemoveGoat($goatThree,'activateGoatThree')
			} else if (event.target.id==='goatFour'){
				addRemoveGoat($goatFour,'activateGoatFour')
			}
		}
		$allGoats.on('click',goatSelector)
		}
		for(var i=0;)
	$start.on('click',startGame)





})