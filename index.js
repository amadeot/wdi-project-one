$(document).ready(function() {     
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
  counter = 0;

  var clip1 = new Audio('GoatScream01.mp3');//these are the audio files used later on
  var clip2 = new Audio('GoatScream02.mp3');
  var clip3 = new Audio('GoatScream03.mp3');
  var clip4 = new Audio('GoatScream04.mp3');

  var addRemoveGoat=function(select,place){//this is the process to make a goat flash for a human
    var addGoat = function(select,place){//this is the part where it flashes on
      select.addClass(place);
    };

    var removeGoat = function(select,place){//this is the part where it flashes off
      window.setTimeout(function(){
        select.removeClass(place);
      }, 500);
    };
    addGoat(select,place);//calling functions in functions for this
    removeGoat(select,place);
  };

  var goatSelector = function(event){//a switch for the human input
    switch(event.target.id){
      case "goatOne":
        addRemoveGoat($goatOne,'activate');
        $humanPen.push($goatOne);
        break;
      case "goatTwo":
        addRemoveGoat($goatTwo,'activate');
        $humanPen.push($goatTwo);
        break;
      case "goatThree":
        addRemoveGoat($goatThree,'activate');
        $humanPen.push($goatThree);
        break;
      case "goatFour":
        addRemoveGoat($goatFour,'activate');
        $humanPen.push($goatFour);
        break;          
    }
  };

  var addGoatToPen = function(){//this is how to add a random goat to the list of goats to click
    var goatNumber = Math.floor(Math.random()*4);
    $goatPen.push($goatList[goatNumber]);
  };

  var removeComputerGoat = function(goat) {//this removes the computer goat flash for computer
    window.setTimeout(function(){
      console.log("removeComputerGoat");
      goat.removeClass('activate');
    }, 500);
  };

  var addComputerGoat= function(goat, i) {//this adds computer goat flash for computer
      console.log("addComputerGoat")
      window.setTimeout(function(){
        goat.addClass('activate');
        removeComputerGoat(goat)}, i*500);
  };


  var compGoatSelector = function(){//this function adds and removes goat flash for computer
    for (var i = 0; i < $goatPen.length; i++){
      var goat = $goatPen[i];
      addComputerGoat(goat, i);
    }
  };
  var clickChecker = function(){//function for checking against computer clicks
    if($humanPen.length < $goatPen.length){//first sees if human input is as long as computer input
      console.log('human is less than goat');
      if($goatPen[counter].selector !== $humanPen[counter].selector){//if input does not match
        losingResponse();
      } else if ($goatPen[counter].selector === $humanPen[counter].selector){//if the input does match
        console.log('keep going');
        counter++;
      }
    }else if ($humanPen.length === $goatPen.length){//if the input is as long as computer input
      console.log('hit the right length');
      if ($goatPen[counter].selector !== $humanPen[counter].selector){//if input doesn't match
        losingResponse();
      } else if ($goatPen[counter].selector === $humanPen[counter].selector){//if input is correct, partial reset for next round, score goes up
        console.log('great job');
        addGoatToPen();
        setTimeout(compGoatSelector,2000);//made this change test later was anon function calling this beforehand
        $humanPen = [];
        score++;
        $currScore.text(score);
      }
    counter=0;
    }
  };
  var startGame = function(event){  //nothing starts until the startgame function runs
    addGoatToPen();//starts by adding a goat to the pen
    
    setTimeout(function(){
      console.log("startGame")

      compGoatSelector();
    }, 500);//callin the computer to start with a slight delay

    $allGoats.on('click', goatSelector);//allows goats to be clicked

    $allGoats.on('click',clickChecker);//checks human input against computer

  };
  $start.on('click',startGame);//start the game when start button is clicked
})