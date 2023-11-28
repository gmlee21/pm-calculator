function toggleAdditionalInputs() {

    var projectType = document.getElementById("projectType");
    var additionalInput1 = document.getElementById("additionalInput1");
    var additionalInput2 = document.getElementById("additionalInput2");
    var additionalInput3 = document.getElementById("additionalInput3");

    additionalInput1.classList.add("hidden");
    additionalInput2.classList.add("hidden");
    additionalInput3.classList.add("hidden");

    var selectedValue = projectType.value;

    if (selectedValue.toLowerCase() === "1"){
        additionalInput3.classList.remove("hidden");
    } else if (selectedValue.toLowerCase() === "2") {
        additionalInput1.classList.remove("hidden");
        additionalInput3.classList.remove("hidden");
    } else {
        additionalInput2.classList.remove("hidden");
    }
  }
  
  document.getElementById("projectType").addEventListener("change", toggleAdditionalInputs);

function goBack() {
    window.history.back();
}
  