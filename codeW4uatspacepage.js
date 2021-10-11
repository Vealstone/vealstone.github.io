

function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    document.getElementById("data").rows["seconds"].innerHTML = "Data Processing...";
    document.getElementById("data").rows["longitude"].innerHTML = "Stand by...";
    mySound= new sound("soundscratch.mp3");
    mySound.play();
}

function stop() {
    document.getElementById("data").rows["seconds"].innerHTML = "<td>Time Elapsed:</td><td>15 seconds</td>";
    document.getElementById("data").rows["longitude"].innerHTML = "<td>Longitude:</td><td>0</td>";
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
   
}



function playStation() {
    mySound = new sound("soundscratch.mp3");
    mySound.play();
}

function playOddity() {
    mySound = new sound("David_Bowie_Space_Oddity.mp3");
    mySound.play();
}

function playChief() {
    mySound = new sound("hail_to_the_chief.mp3");
    mySound.play();
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {
        this.stop = function() {
            
        }
        this.sound.play();
        this.sound.stop();
    }
    // this.stop = function() {
    //     this.sound.pause();
    // }
}

function play() {
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);

    var sum = die1 + die2;

    document.getElementById("die1Res").innerHTML = "die1 = " + die1;
    document.getElementById("die2Res").innerHTML = "die2 = " + die2;
    document.getElementById("sumRes").innerHTML = "sum = " + sum;

    if (sum == 7 || sum == 11) {

        document.getElementById("finalRes").innerHTML = "CRAPS - you lose";
    }
    else if (die1 == die2 && die1 % 2 == 0) {

        document.getElementById("finalRes").innerHTML = "DOUBLES - you win";
    } else {

        document.getElementById("finalRes").innerHTML = "You did not win or lose, please try again.";
    }
}
