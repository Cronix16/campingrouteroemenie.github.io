const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
options = wrapper.querySelector(".options");

const languages = document.querySelector(".language");
const language = document.querySelector(".language-container");

let countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", 
    "Argentina", "Armenia", "Australia", "Austria", "Bangladesh", "Belarus",
    "Belgium", "Bolivia", "Bosnia and Herzegovina", "Brazil", "Bulgaria", 
    "Cambodia", "Canada", "Chile", "China", "Colombia", "Costa Rica", "Croatia", 
    "Cuba", "Cyprus", "Czechia", "Denmark", "Ecuador", "Egypt", "Estonia", "Finland", 
    "France", "Germany", "Greece", "Hungary", "Iceland", "India", "Indonesia", "Iran", 
    "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Latvia", "Lithuania", 
    "Luxembourg", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
    "Nepal", "New Zealand", "Nigeria", "Norway", "Pakistan", "Philippines", "Poland", 
    "Portugal", "Romania", "Russia", "Serbia", "Singapore", "Slovakia", "Slovenia",
    "Somalia", "Spain", "Sweden", "Switzerland", "Tunisia", "Turkey", "Ukraine", 
    "UK(United Kingdom)", "Venezuela", "Vietnam"]   

function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let li = `<li onclick="updateName(this)">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();

function updateName(selectedLi) {
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active-popup");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active-popup"));

language.addEventListener("click", () => languages.classList.toggle("popup"));

