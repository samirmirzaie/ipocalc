// Program Title
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let inputa = +document.getElementById("input1").value;
  let inputb = +document.getElementById("input2").value;
  let inputc = +document.getElementById("input3").value;

  let area = (inputa + inputb + inputc) / 2;

  let area1 = Math.sqrt(
    area * (area - inputa) * (area - inputb) * (area - inputc)
  );

  document.getElementById("output").innerHTML = area1;
}
