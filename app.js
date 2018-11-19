
//set variables
var scores, roundScore, activePlayer, gamePlaying;
init();

//add click event listner so when roll-dice button is clicked  callback function executes
document.querySelector('.btn-roll').addEventListener('click', function() {
  if(gamePlaying) {
    //assign random number from 1 through 6
    var dice = Math.floor( Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice');

    //displays dice and then chooses which die image to show based on dice # pulled from above ^^
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    //logic for dice
    if(dice !== 1) {
      //if it's not 1, change the score number pulled from die
      roundScore += dice;
      document.querySelector('#current-'+activePlayer).textContent = roundScore;
    } else {
      nextPlayer();
    }
  }

});


document.querySelector('.btn-hold').addEventListener('click', function () {

  if(gamePlaying) {
    //adding current score to global score
    scores[activePlayer] += roundScore;
    //updates the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    //check if player won the game
    if (scores[activePlayer] >= 20) {
      document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
      document.querySelector('.dice').style.display = 'none';
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
      gamePlaying = false;
    } else {
      nextPlayer();
    }

    //next player
  }
});

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '1';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none'

};

document.querySelector('.btn-new').addEventListener('click', init);

function init () {
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');
};
