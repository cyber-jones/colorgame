/*var body = document.querySelector("body");
var isblue = false;

setInterval(function(){
    if(isblue){
        body.style.background="white";
    }
    else{
        body.style.background="#3498db";
    }
    isblue = !isblue;
    
}, 1000);*/

/*alert("CONNECTED!!");
var button = document.querySelector("button"); 
button.addEventListener("click", function(){
    alert("Clicked!");
})*/

/*var h1 = document.querySelector("h1");

h1.addEventListener("click", function(){
    h1.style.color = "orange";
})

var lis = document.querySelectorAll("li");

for(var i=0; i<lis.length; i++){
    lis[i].addEventListener("click", function(){
        this.style.color="orange";
    });
}*/

// var button = document.querySelector("button");

// var ispurple = false; 

// button.addEventListener("click", function(){
//     if(ispurple){
//         document.body.style.background="white";
//         document.body.style.color="black";
//     }
//     else{
//         document.body.style.background="purple";
//         document.body.style.color="white";
//     }
//     ispurple=!ispurple;
// })

// var numinput = document.querySelector("input");
// var button1 = document.querySelector("#p1");
// var button2 = document.querySelector("#p2");
// var display1 = document.querySelector("#p1n");
// var display2 = document.querySelector("#p2n");
// var resetbutton = document.querySelector("#reset");
// var score1 = 0;
// var score2 = 0;
// var gameover = false;
// var winningscore = 0;
// var winningscoreDisplay= document.querySelector("p span");

// button1.addEventListener("click", function(){
//     if(!gameover){
//         score1++;
//         if(score1 === winningscore){
//             display1.classList.add("winner");
//             display2.classList.add("looser");
//             gameover = true;
//         }
//         display1.textContent= score1;
//     }
// });

// button2.addEventListener("click", function(){
//     if(!gameover){
//         score2++;
//         display2.textContent= score2;
//         if(score2 === winningscore){
//             display2.classList.add("winner");
//             display1.classList.add("looser");
//             gameover=true;
//         }
//     }
// })

// resetbutton.addEventListener("click", function(){
//     reset();
// });

// function reset(){
//     score1=0;
//     score2=0;
//     display1.textContent=0;
//     display2.textContent=0;
//     display1.classList.remove("winner");
//     display1.classList.remove("looser");
//     display2.classList.remove("winner");
//     display2.classList.remove("looser");
//     gameover=false;
// }

// numinput.addEventListener("change", function(){
//     winningscoreDisplay.textContent = numinput.value;
//     winningscore = Number(numinput.value);
//     reset();
// });


var numSquares = 6;
var h1 = document.querySelector("h1");
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var colorPicked = colorPick();
var message = document.getElementById("message");
var resetbtn = document.getElementById("reset");
var easybtn = document.getElementById("easybtn");
var hardbtn = document.getElementById("hardbtn"); 
var modebtn = document.querySelectorAll(".mode");

for(var i=0; i<modebtn.length; i++){
    
}

easybtn.addEventListener("click", function(){
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");
    hardbtn.style.color = "steelblue"
    this.style.color = "white";
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    colorPicked = colorPick();
    colorDisplay.textContent = colorPicked;
    for(i=0; i<squares.length; i++){
        if(colors[i]){
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    message.textContent = "";
})

hardbtn.addEventListener("click", function(){
    easybtn.classList.remove("selected");
    hardbtn.classList.add("selected");
    this.style.color = "white";
    easybtn.style.color = "steelblue"
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    colorPicked = colorPick();
    colorDisplay.textContent = colorPicked;
    for(i=0; i<squares.length; i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = "block";
    }
    message.textContent = "";
})


resetbtn.addEventListener("click", function(){
    colors = generateRandomColors(numSquares);
    colorPicked = colorPick();
    colorDisplay.textContent = colorPicked;
    this.textContent = "New Color";
    for(i=0; i<squares.length; i++){
        squares[i].style.background = colors[i];
    }
    h1.style.background = "steelblue";
    message.textContent = "";
});

colorDisplay.textContent = colorPicked;

 for(i=0; i<squares.length; i++){
    squares[i].style.background = colors[i];
 
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.background;
        console.log(clickedColor, colorPicked);

        if(clickedColor === colorPicked){
            message.textContent = "Correct!";
            changeColor(clickedColor);
            h1.style.background = clickedColor; 
            resetbtn.textContent = "Play Again?";
        
        }
        else{
            this.style.background = "#232323";
            message.textContent = "Try again";
        }
    });
}

function changeColor(color){
    for(i=0; i<squares.length; i++){
        squares[i].style.background = color;
    }
}

function colorPick(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(numSquares){
    var arr = []

    for(i=0; i<numSquares; i++){
        arr.push(randomColor());
        console.log(randomColor());
    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}