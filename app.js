const btnStart = document.getElementById('btn-start');
const nameInput = document.getElementById('name');
const pSelect1 = document.getElementById('pSelect-1');
const pSelect2 = document.getElementById('pSelect-2');
const pSelect3 = document.getElementById('pSelect-3');
const result = document.querySelector('h3');
const game = document.querySelector('.score');

btnStart.addEventListener('click', (e)=>{
  gameStart();
  e.preventDefault();
});




function gameStart() {
  
  
  player = nameInput.value;
  game.innerHTML = `
        <div class="player1">
          <div class="score-name-player">
            <h2 class="playername">${player}</h2>
            <span class="player-score"></span>
          </div>
          <ul id="playerChoice">
            <li><a id="pSelect-1" onClick="gameOn(1)"><img src="img/rock.png"></a></li>
            <li><a id="pSelect-2" onClick="gameOn(2)"><img src="img/paper.png"></a></li>
            <li><a id="pSelect-3" onClick="gameOn(3)"><img src="img/scisors.png"></a></li>
          </ul>
        </div>
        <div id="vs">VS</div>
        <div class="computer">
          <div class="score-name-computer">
            <h2 class="computer-name">Computer</h2>
            <span class="computer-score"></spa>
          </div>
          <ul id="computerChoice">
            <li><a class="cSelect-1"><img src="img/rock.png"></a></li>
            <li><a class="cSelect-2"><img src="img/paper.png"></a></li>
            <li><a class="cSelect-3"><img src="img/scisors.png"></a></li>
          </ul>
        </div>
  `
}


  cScore = 0;
  pScore = 0;
function gameOn(select){
  let pSelect = select;
  let cSelect = 0;

  cSelect = Math.floor((Math.random() * (3 - 1 + 1))) + 1;


  if(pSelect == 1 & cSelect == 1){
    result.innerHTML=`Game Draw, try again`;
  } else if (pSelect == 2 & cSelect == 2){
    result.innerHTML=`Game Draw, try again`;
  } else if (pSelect == 3 & cSelect == 3) {
    result.innerHTML=`Game Draw, try again`;
  } else if (pSelect == 1 & cSelect == 2) {
    result.innerHTML=`Paper wraps the rock, Computer Wins!`
    cScore = cScore + 1
  } else if (pSelect == 1 & cSelect == 3) {
    result.innerHTML=`Rock smash the scissors, ${player} Wins!`
    pScore++
  } else if (pSelect == 2 & cSelect == 1) {
    result.innerHTML=`Paper wraps the rock, ${player} Wins!`
    pScore++
  } else if (pSelect == 2 & cSelect == 3) {
    result.innerHTML=`Scissors cuts the paper, Computer Wins!`
    cScore = cScore + 1
  } else if (pSelect == 3 & cSelect == 1) {
    result.innerHTML=`Rock smash the scissors, Computer Wins!`
    cScore = cScore + 1
  } else if (pSelect == 3 & cSelect == 2) {
    result.innerHTML=`Scissors cuts the paper, ${player} Wins!`
    pScore++
  }
  
  // document.querySelector('#cSelect-1').classList.remove('selecionado');
  // document.querySelector('#cSelect-2').classList.remove('selecionado');
  // document.querySelector('#cSelect-3').classList.remove('selecionado');

  document.querySelector('.cSelect-1').classList.remove('selecionado')
  document.querySelector('.cSelect-2').classList.remove('selecionado')
  document.querySelector('.cSelect-3').classList.remove('selecionado')

  if (cSelect != 0) {
    document.querySelector('.cSelect-' + cSelect).classList.add('selecionado')
  }

  document.querySelector('.computer-score').innerHTML=`${cScore}`;
  document.querySelector('.player-score').innerHTML=`${pScore}`;

}
  