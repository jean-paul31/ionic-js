const descInput = document.querySelector("#input-desc");
const montantInput = document.querySelector("#input-montant");
const cancelBtn = document.querySelector("#btn-cancel");
const depensesList = document.querySelector("#depenses-list");
const totalDepensesOutput = document.querySelector("#total-depenses");
let totaldepenses = 0;
const clear = () =>{descInput.value = "";montantInput.value = "";}
const confirmBtn = document.querySelector("#btn-confirm").addEventListener("click", () =>{
    const enteredDesc = descInput.value;
    const enteredMontant = montantInput.value;
    if (enteredDesc.trim() <= 0 ||
        enteredMontant <= 0 ||
        enteredMontant.trim() <= 0) {
        return;
    }
    console.log(enteredDesc, enteredMontant);
    
    const newItem = document.createElement("ion-item");
    newItem.textContent = `${enteredDesc} : ${enteredMontant} €`;
    depensesList.appendChild(newItem);
    totaldepenses += +enteredMontant;
    totalDepensesOutput.textContent = totaldepenses;   
    clear;
});

cancelBtn.addEventListener("click", clear);



