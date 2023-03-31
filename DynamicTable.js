/*
    Name: Abraham Vallejos-Soto
    Date: 3/30/2023
    Assignment: Week 4 Lab
 */

// Part 2:

function createTable() {
    var myTable = document.createElement("TABLE");
    myTable.border = 1;
    document.body.appendChild(myTable);

    var a = []; 
    var b = []; 

    for (i=0; i<=10; i++) { 
        
        var currentRow = myTable.insertRow(-1);
        var firstCell = currentRow.insertCell(0);
        firstCell.innerHTML = i;
        
        var secondCell = currentRow.insertCell(1);
        secondCell.innerHTML = a[i] = Math.random();
        
        var thirdCell = currentRow.insertCell(2);
        thirdCell.innerHTML = b[i] = Math.random();
}
}