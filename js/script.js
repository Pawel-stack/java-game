
function playgame(playerInput){
  clearMessages(); 
  let randomNumber = Math.floor(Math.random() * 3 + 1); 
  console.log('Wylosowana liczba to: ' + randomNumber); 

  const computerMove = getMoveName(randomNumber); 

  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'Kamień';
    } else if(argMoveId == 2){
      return 'Papier';
    } else if(argMoveId == 3){
      return 'Nożyce'; 
    } else {
      return 'Nie ma takiego ruchu!'; 
    }
  }

  printMessage('Ruch komputera to: ' + computerMove + '!'); 


  const playerMove = getMoveName(playerInput); 
  printMessage('Ruch gracza to: ' + playerMove + '!');

  //Score Section 

  function displayResult(argComputerMove,argPlayerMove){
    if(argComputerMove == 'Kamień' && argPlayerMove == 'Papier'){
      printMessage('Gratulacje wygrywa gracz!'); 
      
    } else if (argComputerMove == 'Papier' && argPlayerMove == 'Kamień'){
      printMessage('Tym razem przegrywasz!'); 
      
    } else if (argComputerMove == 'Papier' && argPlayerMove == 'Nożyce'){
      printMessage('Gratulacje wygrywa gracz!'); 
      
    } else if (argComputerMove == 'Nożyce' && argPlayerMove == 'Papier'){
      printMessage('Tym razem przegrywasz!'); 
      
    } else if (argComputerMove == 'Nożyce' && argPlayerMove == 'Kamień'){
      printMessage('Gratulacje wygrywa gracz!'); 
    
    } else if (argComputerMove == 'Kamień' && argPlayerMove == 'Nożyce'){
      printMessage('Tym razem przegrywasz!'); 
      
    } else if(argComputerMove == argPlayerMove){
      printMessage('Remis!'); 
    }
  }

  displayResult(computerMove,playerMove);

}

playgame(); 


document.getElementById('play-rock').addEventListener('click', function(){
  playgame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playgame(2); 
}); 
document.getElementById('play-scissors').addEventListener('click', function(){
  playgame(3);
}); 




const playerResult = document.getElementById('results-player');
const computerResult = document.getElementById('results-computer');

playerResult = 0; 

computerResult = 0;


function gameResults(player,computer){

  if(computer == 'Kamień' && player == 'Papier'){
    playerResult ++; 
    
  } else if (computer == 'Papier' && player == 'Kamień'){
    computerResult ++;  
    
  } else if (computer == 'Papier' && player == 'Nożyce'){
    playerResult ++;  
    
  } else if (computer == 'Nożyce' && player == 'Papier'){
    computerResult ++;
    
  } else if (computer == 'Nożyce' && player == 'Kamień'){
    playerResult ++; 
  
  } else if (computer == 'Kamień' && player == 'Nożyce'){
    computerResult ++; 
    
  } 
}

gameResults();




