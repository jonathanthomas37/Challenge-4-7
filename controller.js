let list = []

window.onload = function () {

    document.getElementById("b1").addEventListener("click", buttonClicked)
    document.getElementById("b2").addEventListener("click", listAlert)
}

function buttonClicked(event){
    let inputItem = document.querySelector("input[type=string]").value
    try {
        if(!inputItem)  throw new Error("Can't add nothing to the list")
    } catch (e) {
        alert(e)
        return
    }
    const item = document.getElementById("item") 
    list.push(inputItem)
    item.value = ""
}

function listAlert() {
    alert(list);
}