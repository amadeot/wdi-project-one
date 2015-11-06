console.log('linked!');
$allGoats = $('.button');
$goatOne = $('#goatOne');
$goatTwo = $('#goatTwo');
$goatThree = $('#goatThree');
$goatFour = $('#goatFour');
$start = $('#start')

$goatList = [$goatOne,$goatTwo,$goatThree,$goatFour]
$goatPen = []

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
	var addRandomGoatToPen = function(){
		var i=Math.floor(Math.random()*4)
		$goatPen.push($goatList[i])
	}
	addRandomGoatToPen()
	$firstGoat = $goatPen[0]
	console.log($firstGoat)
	var CompGoatSelector = function($firstGoat){
		console.log('this works')
		if ($firstGoat==='goatOne'){
			console.log('please work 1')
			addRemoveGoat($goatOne,'activateGoatOne')
		} else if ($firstGoat==='goatTwo'){
			console.log('please work 2')
			addRemoveGoat($goatTwo,'activateGoatTwo')
		} else if ($firstGoat==='goatThree'){
			console.log('please work 3')
			addRemoveGoat($goatThree,'activateGoatThree')
		} else if ($firstGoat==='goatFour'){
			console.log('please work 4')
			addRemoveGoat($goatFour,'activateGoatFour')
		}
	}
	CompGoatSelector($firstGoat)
	
$start.on('click',startGame)
