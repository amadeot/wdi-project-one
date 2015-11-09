var removeActivate = function(goat, i) {
	window.setTimeout(function(){
		goat.removeClass('activate')
	}, (i+1) + 1000)	
}

var addActivate = function(goat, i){
	window.setTimeout(function(){
		goat.addClass('activate')
		removeActivate(goat,i)
	}, (i+1) + 750)
}

for (var i = 0; i < $goatPen.length; i++) {
  var goat = $goatPen[i];
  console.log(goat);
  addActivate(goat, i);
}

