// Declare Vars

var inputField1, inputField2, calculater, calculaterSub, calculaterMul, calculaterDiv, output;

// Set Up Vars

inputField1 = document.getElementById('num_one');
inputField2 = document.getElementById('num_two');
calculater = document.getElementById('calculateBtn');
calculaterSub = document.getElementById('calculateBtnSub');
calculaterMul = document.getElementById('calculateBtnMul');
calculaterDiv = document.getElementById('calculateBtnDiv');
output = document.getElementById('answer');




calculater.onclick = function () {
  one = inputField1.value;
  two = inputField2.value;
  output.innerHTML = Number(one) + Number(two);
};


calculaterSub.onclick = function () {
  one = inputField1.value;
  two = inputField2.value;
  output.innerHTML = Number(one) - Number(two);
};

calculaterMul.onclick = function () {
  one = inputField1.value;
  two = inputField2.value;
  output.innerHTML = Number(one) * Number(two);
};

calculaterDiv.onclick = function () {
  one = inputField1.value;
  two = inputField2.value;
  output.innerHTML = Number(one) / Number(two);
};
