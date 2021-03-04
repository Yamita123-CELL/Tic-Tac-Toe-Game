let turn = "X";
let arrayStatus = ["","","","","","","","",""];
let winningCondition = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
function clickGrid(event){
    var clickedCell = event.target;
    var id = clickedCell.getAttribute("id");
    arrayStatus[id-1] = turn;
    // console.log(arrayStatus);
    clickedCell.innerText = turn;
    clickedCell.style.textAlign = "center";
    clickedCell.style.fontSize = "70px";
   
    for(var i=0;i<8;i++){
        var tempArray = winningCondition[i];
        // console.log(tempArray);
        var flag = true;
        for(var j=0;j<3;j++){
            if(arrayStatus[tempArray[j]-1]!=turn){
                flag = false;
                break;
            }    
        }
        if(flag){
            display(turn);
            break;
        }
    }
    if(turn == "X"){
        turn = "0";
        document.getElementById("turn").innerHTML = "Turn : "+turn;
    }
    else{
        turn = "X";
        document.getElementById("turn").innerHTML = "Turn : "+turn;
    }
    if(arrayStatus.indexOf("")==-1){
        alert("Draw!");
    }
    clickedCell.removeEventListener("click", clickGrid);
    
    // console.log(clickedCell);
    // console.log("hello");
}

function display(turn){
    if(turn=="X")
        alert("Congratulations! Player1 wins");
    else
        alert("Congratulations! Player2 wins"); 
    document.querySelectorAll(".grid").forEach((cell)=>cell.removeEventListener("click", clickGrid));
}

function reset(){
    turn = "X";
    arrayStatus = ["","","","","","","","",""];
    document.getElementById("turn").innerHTML = "Turn : X";
    document.querySelectorAll(".grid").forEach((cell)=>cell.innerHTML = "");
    document.querySelectorAll(".grid").forEach((cell)=>cell.addEventListener("click", clickGrid));

}
document.querySelectorAll(".grid").forEach((cell)=>cell.addEventListener("click", clickGrid));