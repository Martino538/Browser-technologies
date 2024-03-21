// ---- DATE PICKER ----

// Prevent user from pick future dates in date picker
const maxDate = new Date().toISOString().split('T')[0];
document.getElementById('dateOfDied').setAttribute("max", maxDate);

const currentDate = new Date();
const minDate = new Date(currentDate.getFullYear() - 2, currentDate.getMonth(), currentDate.getDate());
const minDateString = minDate.toISOString().split('T')[0];
document.getElementById('dateOfDied').setAttribute("min", minDateString);

// ---- ERROR HANDLING ----

// Generate error message underneath the input field
let invoer = document.querySelectorAll('input');
var errorElement = document.querySelectorAll('span[data-error]');

if (invoer.value === "") {
    errorElement.style.display = 'none';
} 

// ---- LOCAL STORAGE ----

// Haal alle invoervelden op
const inputFields = document.querySelectorAll('input[type="radio"], input:not([type="radio"]), select, textarea');

inputFields.forEach(inputField => {
    inputField.addEventListener('change', function() {
        const value = inputField.type === 'radio' ? inputField.id : inputField.value;
        const key = 'savedValue_' + inputField.id;
        localStorage.setItem(key, value);
        // alert('Waarde opgeslagen in lokale opslag!');
    });

    window.addEventListener('load', function() {
        const key = 'savedValue_' + inputField.id;
        const savedValue = localStorage.getItem(key);
        if (savedValue !== null) {
            if (inputField.type === 'radio') {
                if (inputField.id === savedValue) {
                    inputField.checked = true;
                }
            } else {
                inputField.value = savedValue;
            }
        }
    });
});

// ---- SHOW HIDE ----

let dataAttRadio = document.querySelectorAll('input[type="radio"][data-show-hide]');

dataAttRadio.forEach((dataRadio) => {
    dataRadio.addEventListener('change', function () {
        let radioId = this.getAttribute('data-show-hide');
        let radioSection = document.querySelector(radioId);

        if (this.value === 'ja') {
            radioSection.style.display = 'block';
        } else if (this.value === 'ja-exec'){
            radioSection.style.display = 'flex';            
        } else {
            radioSection.style.display = 'none';
        }
    });
});


// ---- REQUIRED INPUT CHECK ----

document.getElementById('submitFormBtn').addEventListener('click', function() {
    // Selecteer alle vereiste velden
    const requiredFields = document.querySelectorAll('[required]');
    
    // Initialiseer een variabele om bij te houden of er een leeg vereist veld is
    let isEmpty = false;

    // Controleer of er een leeg vereist veld is
    requiredFields.forEach(field => {
        if (!field.value.trim()) { // Controleer of het veld leeg is
            isEmpty = true;
        }
    });

    // Als er een leeg vereist veld is, toon een alert
    if (isEmpty) {
        alert('Vul alstublieft alle vereiste velden in.');
    } else { // Als alle vereiste velden zijn ingevuld, verzend het formulier
        document.getElementById('tax-form').submit();
    }
});

