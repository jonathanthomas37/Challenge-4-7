let list = []

window.onload = function () {

    let button = document.getElementById("b1").addEventListener("click", buttonClicked)
}

function buttonClicked(event){
    
    list.push("button clicked" )
    console.log("button clicked", list.length)
}