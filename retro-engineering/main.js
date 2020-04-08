const nameInput = document.querySelector("#input-Name");
const ratingInput = document.querySelector("#input-rating");
const cancelBtn = document.querySelector("#btn-cancel");
const filmList = document.querySelector("#film-list");
const clear = () =>{nameInput.value = "";ratingInput.value = "";};
const alertCtrl = document.createElement("ion-alert");
const confirmBtn = document.querySelector("#btn-confirm").addEventListener("click", () =>{
    const nameInputValue = nameInput.value;
    const ratingInputValue = ratingInput.value;
    if (nameInputValue.trim() <= 0 ||
    ratingInputValue <= 0 ||
    ratingInputValue.trim() <= 0) {
            alertCtrl.header = "champs invalides";
            alertCtrl.message = "Veuillez entrer un nom de film et une note";
            alertCtrl.buttons = ["OK"];
            document.body.appendChild(alertCtrl);
            return alertCtrl.present();
    }
    
    const newItem = document.createElement("ion-item");
    newItem.innerHTML = "<b>"+ nameInputValue + "</b> : " + ratingInputValue + " / 5";
    filmList.appendChild(newItem);  
    clear;
});

cancelBtn.addEventListener("click", clear);

