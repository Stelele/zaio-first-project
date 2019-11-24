function chosenColor(color,id){
    document.getElementById("disColor").innerHTML = color;
    document.getElementById("chosenId").value = id;
    document.getElementById("colorName").innerHTML = color;
}

function updateNum(num){
    var sorceValue = document.getElementById('itemNum');
    var currentValue = parseInt(sorceValue.innerHTML,10);

    var newNum = currentValue + num;

    if(newNum < 0){
        sorceValue.innerHTML = 0
    }else{
        sorceValue.innerHTML = currentValue + num;
    }
}

function addCart(){
    var currentValue = parseInt(document.getElementById('itemNum').innerHTML,10);
    var chosenId = document.getElementById('chosenId').value;
    
    var i
    for(i = 0; i < currentValue; i++){
        var lastValue = document.getElementById("lastValue")
        var newID = parseInt(lastValue.value,10) + 1;
        
        var newButton = document.getElementById(chosenId).cloneNode(true);
        newButton.id = "test" + newID

        lastValue.value = newID

        document.getElementById('details').append(newButton);
        document.getElementById(newButton.id).style.padding = "1%";
        
    }

    var totalColor = document.getElementById('checkoutNum')
    totalColor.innerHTML = parseInt(totalColor.innerHTML,10) + currentValue

    document.getElementById("itemNum").innerHTML = 0;
    document.getElementById("closeModal").click();
    document.getElementById("cart").innerHTML = "Checkout Now"

}