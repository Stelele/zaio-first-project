function chosenColor(color,id,price){
    //Record the chosen color and display said color and price on the page 
    document.getElementById("disColor").innerHTML = color;
    document.getElementById("chosenId").value = id;
    document.getElementById("colorName").innerHTML = color;

    //desplay unit price and store value
    document.getElementById("chosenPriceDisplay").innerHTML = "$" + price
    document.getElementById("chosenPrice").value = price
}

function updateNum(num){
    //increment and decrement color selector amount
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
    //function that displays selected color n times and calculates the subsequent total cost
    var colorNum = parseInt(document.getElementById('itemNum').innerHTML,10);
    var chosenId = document.getElementById('chosenId').value;
    var chosenPrice = parseFloat(document.getElementById("chosenPrice").value);
    var totalCost = parseFloat(document.getElementById("totalPriceValue").value);
    
    var i
    for(i = 0; i < colorNum; i++){
        var lastValue = document.getElementById("lastValue")
        var newID = parseInt(lastValue.value,10) + 1;
        
        var newButton = document.getElementById(chosenId).cloneNode(true);
        newButton.id = "test" + newID

        lastValue.value = newID

        document.getElementById('details').append(newButton);
        document.getElementById(newButton.id).style.padding = "2%";

        totalCost += chosenPrice;
        
    }

    var totalColor = document.getElementById('checkoutNum');
    totalColor.innerHTML = parseInt(totalColor.innerHTML,10) + colorNum;

    document.getElementById("totalPriceValue").value = totalCost;
    document.getElementById("totalPriceDisplay").innerHTML = "$" + totalCost.toFixed(2);

    document.getElementById("itemNum").innerHTML = 0;
    document.getElementById("closeModal").click();
    document.getElementById("checkOut").hidden = false;

}

function displayCartDetails(){
    //function that shows a summary of all the colors selected and the total cost
    let checkOutBody = document.getElementById("checkOutBody")
    let detailsBody = document.getElementById("details").getElementsByTagName("button")
    let totalCost = document.getElementById("totalPriceDisplay").innerHTML
    let chosenColors = new Object();

    //get dictionary of the occurances of each color
    for(var i = 0; i < detailsBody.length; i++){
        let color = detailsBody[i].name;

        if(color in chosenColors){
            chosenColors[color] += 1;
        }else{
            chosenColors[color] = 1;
        }
    }

    //display summary in nodal
    let headingRow = document.createElement("div");
    headingRow.className = "row";
    
    let columnOne = document.createElement("div");
    columnOne.className = "col";
    columnOne.innerHTML = "<h3>Color</h3>";

    let columTwo = document.createElement("div");
    columTwo.className = "col";
    columTwo.innerHTML = "<h3>Quantity</h3>";

    headingRow.appendChild(columnOne);
    headingRow.appendChild(columTwo);
    checkOutBody.appendChild(headingRow);

    for(color in chosenColors){
        let row = document.createElement("div");
        row.className = "row";

        let column = document.createElement("div");
        column.className = "col";
        column.innerHTML = "<h4>"+ color +"</h4>";

        row.appendChild(column);

        column = document.createElement("div");
        column.className = "col";
        column.innerHTML = "<h4>"+ chosenColors[color] +"</h4>";

        row.appendChild(column);

        checkOutBody.appendChild(row)

    }

    let totalRow = document.createElement("div")
    totalRow.className = "row"
    
    columnOne = document.createElement("div")
    columnOne.className = "col"
    columnOne.innerHTML = "<h4><strong>Total Cost</strong></h4>"

    columTwo = document.createElement("div");
    columTwo.className = "col";
    columTwo.innerHTML = "<h4>" + totalCost + "</h4";

    totalRow.appendChild(columnOne);
    totalRow.appendChild(columTwo);

    checkOutBody.appendChild(totalRow);
}
