const msg = 'Do you want to play a game?',
      winnMsg = 'Congratulation, you won!',
      contMsg = 'Do you want to continue?',
      payMsg = 'Thank you for your participation. Your prize is:',
      curr = [], 
      data = {};
         
let val = window.prompt(msg),
    win = [];

console.log(val);
if (!val){
    alert('You did not become a billionaire, but can.');
} else{
    win[Math.random()];
}