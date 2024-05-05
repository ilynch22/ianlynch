function decrement() {
    var currNum = Number(document.getElementById("total").innerHTML);
    
    if (currNum != 0) {
        document.getElementById("total").innerHTML = currNum - 1;
    }
}

function increment() {
    var currNum = Number(document.getElementById("total").innerHTML);
    document.getElementById("total").innerHTML = currNum + 1;
}

function getTotal() {
    var count = Number(document.getElementById("total").innerHTML);
    
    var currTotal = count * 3.99;

    document.getElementById("grand-total").innerHTML = "$" + currTotal;
}