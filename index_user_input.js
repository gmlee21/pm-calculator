function toggleAdditionalInputs() {

    var projectType = document.getElementById("projectType");
    var procurementApproach = document.getElementById("procurementApproach");
    var developmentScale = document.getElementById("developmentScale");
    var systemCost = document.getElementById("systemCost");
    var trialDuration = document.getElementById("trialDuration");

    var additionalInput1 = document.getElementById("additionalInput1");
    var additionalInput2 = document.getElementById("additionalInput2");
    var additionalInput3 = document.getElementById("additionalInput3");
    var additionalInput4 = document.getElementById("additionalInput4"); 

    additionalInput1.classList.add("hidden");
    additionalInput2.classList.add("hidden");
    additionalInput3.classList.add("hidden");
    additionalInput4.classList.add("hidden");

    var selectedValueA = projectType.value;
    var selectedValueB = procurementApproach.value;
    var selectedValue1 = developmentScale.value;
    var selectedValue2 = systemCost.value;
    var selectedValue3 = trialDuration.value;

    if (selectedValueA === "1") {
            additionalInput3.classList.remove("hidden");
        if (selectedValueB !== "0" && selectedValue3 !== "0") {
            console.log("unhide");
            additionalInput4.classList.remove("hidden"); 
        }
    }

    if (selectedValueA === "2") {
        additionalInput1.classList.remove("hidden");
        additionalInput3.classList.remove("hidden");
        if (selectedValueB !== "0" && selectedValue1 != "0" && selectedValue3 !== "0") {
            additionalInput4.classList.remove("hidden");
        }
    } 
    
    if (selectedValueA === "3") {
        additionalInput2.classList.remove("hidden");
        if (selectedValueB !== "0" && selectedValue2 !== "0" ) {
            additionalInput4.classList.remove("hidden");
        }
    }
  }
  
  document.getElementById("calculator").addEventListener("change", toggleAdditionalInputs);
  
function goBack() {
    window.history.back();
}
  