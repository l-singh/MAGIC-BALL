let userName = 'Lovely';
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');
let userQuestion = 'When I will be Millionaire';
console.log(`${userName} asked ${userQuestion}?`);
//find a random number between 0 to 7 multiply it with 8(exclusive)
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';
switch (randomNumber) {
  case 0:
    eightBall='It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
     eightBall = 'Cannot predict now';
    break;
  case 4:
     eightBall = 'Do not count on it';
    break;
  case 5:
     eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;    
}
console.log(`The eight ball answered ${eightBall}`);
