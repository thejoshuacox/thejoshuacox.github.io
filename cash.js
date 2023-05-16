function cashRegister() {
  this.items = 0;
  this.total = 0.0;
  this.add = function(cost) {
    this.total += cost;
  }
}

var cr = new cashRegister();

function scan() {
  cr.items = parseInt(prompt("Enter the number of items you want to add"));
  var i;
  var amnt = 0;
  for (i = 0; i < cr.items; i++) {
    amnt = parseFloat(prompt("Enter the price of item " + (i + 1) + ": "));
    if (isNaN(amnt)) {
      alert("Ammount not valid and won't count towards the total");
    }
    else {
      cr.add(amnt);
    }
    amnt = 0;
  }
  document.getElementById("Display").innerHTML = "$" + (Math.round(cr.total * 100) / 100);
}

function display() {
  if (cr.total === 0) { alert("Please input the prices you would like to add together by clicking on \"Enter Items\""); }
  else { alert("Enter more items by pressing \"Enter Items\" again, or restart by clicking \"Reset Total\"\nThe total cost is $" + (Math.round(cr.total * 100) / 100)); }
}

function reset() {
  cr.total = 0;
  document.getElementById("Display").innerHTML = "$" + (Math.round(cr.total * 100) / 100);
}