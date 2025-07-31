const submit = document.getElementById('submit');
const nname = document.getElementById('nom');
const lastName = document.getElementById('prenom');
const mydate = document.getElementById('date');
const result = document.getElementById('result');

function formBuy(event){
    
    calculaDate();

    let fname = (nname.value.length);
    let lname = (lastName.value.length);

    if (fname < 3 || lname < 3){
            alert("Vous devez entrer plus de 3 lettres !")
    }

    event.preventDefault();
}

function calculaDate(){

    let todayDate = new Date();
    let clientDate =new Date(mydate.value);
    let diffTime = clientDate.getTime() - todayDate.getTime();
    let diffDays = Math.round(diffTime / (24 * 60 * 60 * 60)); 

    if(diffDays > 8){
        /*let p = document.createElement('p');
        p.textContent(" vous ne pouvez pas être livré plus de 8 jours !");*/
        alert(" vous ne pouvez pas être livré plus de 8 jours !");
    }

}

submit.addEventListener('click', formBuy);