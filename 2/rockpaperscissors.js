var pChoice;

var choose = function(choice){
	pChoice = choice;
	cChoice();
}
var test = function(click){
	alert('You picked ' + pChoice);
}
const scissors = 'scissors';
const paper = 'paper';
const rock = 'rock';

var game = function(pChoice){
	if(pChoice == scissors){
		if(computerChoice == scissors){
			var s1 = 'You both used: ' + scissors;
			console.log(s1);
			alert(s1);
		}else if(computerChoice == rock){
			var s2 = 'You lost! The computer used: ' + rock;
			alert(s2);
		}else if(computerChoice == paper){
			var s3 = 'You won! The computer used: ' + paper;
			console.log(s3);
			alert(s3);
		}
	}else if(pChoice == paper){
		if(computerChoice == paper){
			var p1 = 'You both used: ' + paper;
			console.log(p1);
			alert(p1);
		}else if(computerChoice == scissors){
			var p2 = 'You lost! The computer used: ' + scissors;
			console.log(p2);
			alert(p2);
		}else if(computerChoice == rock){
			var p3 = 'You won! The computer used: ' + rock;
			console.log(p3);
			alert(p3);
		}
	}else if(pChoice == rock){
		if(computerChoice == rock){
			var r1 = 'You both used: ' + rock;
			console.log(r1);
			alert(r1);
		}else if(computerChoice == paper){
			var r2 = 'You lost! The computer used: ' + paper;
			console.log(r2);
			alert(r2);
		}else if(computerChoice == scissors){
			var r3 = 'You won! The computer used: ' + scissors;
			console.log(r3);
			alert(r3);
		}
	}
}

var cChoice = function(){
	var numberChoice = Math.floor(Math.random() * 4);
	if(numberChoice == 1){
		computerChoice = scissors;
		document.getElementById('myImage').src='assets/scissors.jpg';
		game(pChoice);
	}else if(numberChoice == 2){
		computerChoice = paper;
		document.getElementById('myImage').src='assets/paper.jpg';
		game(pChoice);
	}else if(numberChoice == 3){
		computerChoice = rock;
		document.getElementById('myImage').src='assets/rock.jpg';
		game(pChoice);
	}

}