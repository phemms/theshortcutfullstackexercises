let list_plays = ["Rock", "Paper", "Scissors"]


let player = false;
while (player == false) {
    player = prompt("Enter you choice, Rock, Paper or Scissors?")
    let opponent = list_plays[Math.floor(Math.random() * 2)]
    if (player == null){
        break
    }
    if (player == opponent){
        alert("Tie!")
    }
    else if (player == "Rock") {
        if(opponent == "paper"){
            alert("Opponent wins", opponent, "covers", player)
        } else{
        alert("Player wins", player, "smashes", opponent)
        }
    }
    else if (player == "Paper"){
        if (opponent == "Scissors"){
        alert("Opponent wins", opponent, "cuts", player)
    }   else {
        alert("Player wins", player, "covers", opponent)
        }
    }
    else if (player == "Scissors"){
        if(opponent == "Rock"){
        alert("Opponent wins", opponent, "smashes", player)
        }else{
            alert("Player wins", player, "cuts", opponent)
        }
    }else {
        alert("Invalid entry, try again")
    }
    player = false
}