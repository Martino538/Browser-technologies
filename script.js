// Bron: https://chat.openai.com/

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


// Bij wijzigingen in de input field, kijk dan of het type radio is.
// Zo ja, sla de waarde op met een key & value
inputFields.forEach(inputField => {
    inputField.addEventListener('change', function() {
        const value = inputField.type === 'radio' ? inputField.id : inputField.value;
        const key = 'savedValue_' + inputField.id;
        localStorage.setItem(key, value);
    });


    // On load, laad dan de waardes in
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

// Pak alle radio fields met een data attribuut
// Als de waarde veranderd voer dan styling uit
// op de section met sectionId op basis van value bij radio button

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


// ---- DUPLICATE VERKRIJGER GEGEVENS ----

const addBtn = document.getElementById('duplicateAcquireInfo').addEventListener('click', duplicateSection);
const delBtn = document.getElementById('deleteAcquireInfo').addEventListener('click', removeSection);
let counter = 1; 

function duplicateSection(){
    counter++;

    const newAcquirer = document.createElement("section");
    newAcquirer.innerHTML = `
        <h3>Gegevens persoon ${counter}</h3>
        <p>Vul de gegevens in van de persoon of instelling.</p>
        <div class="form-group">
            <label for="bsnAcquirer-${counter}">Burgerservicenummer persoon</label>
            <input type="text" placeholder="" required name="bsnAcquirer" id="bsnAcquirer-${counter}" minlength="9" maxlength="9" pattern="^[1-9][0-9]{8}$" title="Vul een juist BSN nummer in, startende met 1 of hoger">
            <span data-error>&#9888; Alleen getallen, te beginnen met 1 of hoger</span>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label for="firstNameAcquirer-${counter}">Voorletter(s)</label>
                <input type="text" placeholder="" required name="firstNameAcquirer" id="firstNameAcquirer-${counter}" pattern="^[A-Z][A-Za-z.]*$" title="Vul alleen hoofdletters en punten in. Voorbeeld: (A.B.)">
                <span data-error>&#9888; Alleen hoofdletters en punten</span>
            </div>
            <div class="form-group">
                <label for="prepositionAcquirer-${counter}">Tussen-voegsel(s)</label>
                <input type="text" placeholder="" name="prepositionAcquirer" id="prepositionAcquirer-${counter}" pattern="^[a-zA-Z]+$" title="Vul alleen letters in">
                <span data-error>&#9888; Alleen letters toegestaan</span>
            </div>
            <div class="form-group">
                <label for="secondNameAcquirer-${counter}">Achternaam</label>
                <input type="text" placeholder="" required name="secondNameAcquirer" id="secondNameAcquirer-${counter}" pattern="^[a-zA-Z]+$" title="Vul alleen letters in">
                <span data-error>&#9888; Alleen letters toegestaan</span>
            </div>
        </div>
        <div class="form-group">
            <p>Geboortedatum</p>
            <input type="date" name="birthAcquirer"- id="birthAcquirer-${counter}">
            <label for="birthAcquirer-${counter}"></label>
        </div>
        <h3>Gegevens instelling</h3>
        <div class="form-group">
            <label for="rsinAcquirer-${counter}">RSIN instelling</label>
            <input type="text" placeholder="" required name="rsinAcquirer" id="rsinAcquirer-${counter}" minlength="9" maxlength="9" pattern="^[1-9][0-9]{8}$" title="Vul een juist BSN nummer in, startende met 1 of hoger">
            <span data-error>&#9888; Alleen getallen, te beginnen met 1 of hoger</span>
        </div>
        <div class="form-group">
            <label for="nameInstitutionAcquirer-${counter}">Naam instelling (bijvoorbeeld een notariskantoor)</label>
            <input type="text" placeholder="" required name="nameInstitutionAcquirer" id="nameInstitutionAcquirer-${counter}" pattern="^[a-zA-Z]+$" title="Vul alleen letters in">
            <span data-error>&#9888; Alleen letters toegestaan</span>
        </div>
        <h3>Adres in Nederland</h3>
        <div class="form-row">
            <div class="form-group">
                <label for="adressStreetNLAcquirer-${counter}">Straat</label>
                <input type="text" placeholder="" name="adressStreetNLAcquirer" id="adressStreetNLAcquirer-${counter}" pattern="^[a-zA-Z]+$" title="Vul alleen letters in">
                <span data-error>&#9888; Alleen letters toegestaan</span>
            </div>
            <div class="form-group">
                <label for="adressNumberNLAcquirer-${counter}">Huisnummer</label>
                <input type="text" placeholder="" name="adressNumberNLAcquirer" id="adressNumberNLAcquirer-${counter}" pattern="^[1-9]+$" title="Vul een juist huisnnumer in, startende met 1 of hoger">
                <span data-error>&#9888; Alleen getallen toegestaan</span>
            </div>
            <div class="form-group">
                <label for="adressAdditionNLAcquirer-${counter}">Toevoeging</label>
                <input type="text" placeholder="" name="adressAdditionNLAcquirer" id="adressAdditionNLAcquirer-${counter}" pattern="^[a-zA-Z]+$" title="Vul alleen letters in">
                <span data-error>&#9888; Alleen letters toegestaan</span>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label for="zipAdressNLAcquirer-${counter}">Postcode</label>
                <input type="text" placeholder="" name="zipAdressNLAcquirer" id="zipAdressNLAcquirer-${counter}" maxlength="6" pattern="^\d{4}\s?[A-Z]{2}$" title="Vul juiste postcode in. Voorbeeld: 1234AB">
                <span data-error>&#9888; Alleen hoofdletters en getallen</span>
            </div>
            <div class="form-group">
                <label for="cityNLAcquirer-${counter}">Woonplaats</label>
                <input type="text" placeholder="" name="cityNLAcquirer" id="cityNLAcquirer-${counter}" pattern="^[a-zA-Z]+$" title="Vul een juiste woonplaats in. Voorbeeld: Amsterdam">
                <span data-error>&#9888; Alleen letters toegestaan</span>
            </div>
        </div>
        <h3>Adres in het buitenland</h3>
        <div class="form-row">
            <div class="form-group">
                <label for="adressStreetAbroadAcquirer-${counter}">Straat</label>
                <input type="text" placeholder="" name="adressStreetAbroadAcquirer" id="adressStreetAbroadAcquirer-${counter}" pattern="^[a-zA-Z]+$" title="Vul alleen letters in">
                <span data-error>&#9888; Alleen letters toegestaan</span>
            </div>
            <div class="form-group">
                <label for="adressNumberAbroadAcquirer-${counter}">Huisnummer</label>
                <input type="text" placeholder="" name="adressNumberNLAcquirer" id="adressNumberAbroadAcquirer-${counter}" pattern="^[1-9]+$" title="Vul een juist huisnnumer in, startende met 1 of hoger">
                <span data-error>&#9888; Alleen getallen toegestaan</span>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label for="zipAdressAbroadAcquirer-${counter}">Postcode</label>
                <input type="text" placeholder="" name="zipAdressAbroadAcquirer" id="zipAdressAbroadAcquirer-${counter}" maxlength="6" pattern="^\d{4}\s?[A-Z]{2}$" title="Vul juiste postcode in. Voorbeeld: 1234AB">
                <span data-error>&#9888; Alleen letters en getallen. Voorbeeld: 1234AB</span>
            </div>
            <div class="form-group">
                <label for="cityAbroadAcquirer-${counter}">Woonplaats</label>
                <input type="text" placeholder="" name="cityAbroadAcquirer" id="cityAbroadAcquirer-${counter}" pattern="^[a-zA-Z]+$" title="Vul alleen letters in">
                <span data-error>&#9888; Alleen letters toegestaan</span>
            </div>
        </div>
        <div class="form-group">
            <label for="countryAcquirer-${counter}">Land</label>
            <input type="text" placeholder="" name="countryAcquirer" id="countryAcquirer-${counter}" pattern="^[a-zA-Z]+$" title="Vul alleen letters in">
            <span data-error>&#9888; Alleen letters toegestaan</span>
        </div>
        <h3>Relatie met overledene</h3>
        <p>Wat is de relatie van deze verkrijger met de overledene?</p>
        <div class="radioBtn-wrapper individual-radio">
            <input type="radio" name="question-13" id="question-13a-a-${counter}" value="nee" required>
            <label for="question-13a-a-${counter}">Echtgenoot of geregistreerd partner</label>
        </div>
        <div class="radioBtn-wrapper individual-radio">
            <input type="radio" name="question-13" id="question-13a-b-${counter}" value="ja" data-show-hide="#question-13a">
            <label for="question-13a-b-${counter}">Samenwoner zonder notariële akte</label>
        </div>
        <div class="hidden" id="question-13a-${counter}">
            <p>Stonden de verkrijger en de overledene tot de overlijdens datum minstens 5 jaar op hetzelfde adres
                ingeschreven in de Basisregistratie Personen (BRP) of een vergelijkbare administratie buiten Nederland?</p>
            <div class="input-wrapper">
                <div class="radioBtn-wrapper">
                    <input type="radio" name="question-13a-sub" id="question-13a-sub-a-${counter}" value="nee">
                    <label for="question-13a-sub-a-${counter}">Nee</label>
                </div>
                <div class="radioBtn-wrapper">
                    <input type="radio" name="question-13a-sub" id="question-13a-sub-b-${counter}" value="ja">
                    <label for="question-13a-sub-b-${counter}">Ja.</label>
                </div>
            </div>
        </div>
        <div class="radioBtn-wrapper individual-radio">
            <input type="radio" name="question-13" id="question-13c-a-${counter}" value="ja" data-show-hide="#question-13c">
            <label for="question-13c-a">Samenwoner met notariële akte</label>
        </div>
        <div class="hidden" id="question-13c-${counter}">
            <p>Is het samenlevingscontract minstens 6 maanden voor het overlijden opgesteld?</p>
            <div class="input-wrapper">
                <div class="radioBtn-wrapper">
                    <input type="radio" name="question-13c-sub" id="question-13c-sub-a-${counter}" value="nee" checked>
                    <label for="question-13c-sub-a-${counter}">Nee</label>
                </div>
                <div class="radioBtn-wrapper">
                    <input type="radio" name="question-13c-sub" id="question-13c-sub-b-${counter}" value="ja">
                    <label for="question-13c-sub-b-${counter}">Ja.</label>
                </div>
            </div>
            <div class="form-group">
                <p>Datum huwelijkse of partnerschapsvoorwaarden</p>
                <input type="date" name="question-13c-sub-c" id="question-13c-sub-c-${counter}">
                <label for="question-13c-sub-c-${counter}"></label>
            </div>
        </div>
        <div class="radioBtn-wrapper individual-radio">
            <input type="radio" name="question-13" id="question-13d-${counter}" value="nee">
            <label for="question-13d-${counter}">Ouder</label>
        </div>
        <div class="radioBtn-wrapper individual-radio">
            <input type="radio" name="question-13" id="question-13e-${counter}" value="nee">
            <label for="question-13e-${counter}">Ex-partner (als er bij de echtscheiding afspraken zijn gemaakt over de erfenis)</label>
        </div>
        <div class="radioBtn-wrapper individual-radio">
            <input type="radio" name="question-13" id="question-13f-${counter}" value="nee">
            <label for="question-13f-${counter}">Kind of stiefkind</label>
        </div>
        <div class="radioBtn-wrapper individual-radio">
            <input type="radio" name="question-13" id="question-13g-${counter}" value="nee">
            <label for="question-13g-${counter}">Pleegkind</label>
        </div>
        <div class="radioBtn-wrapper individual-radio">
            <input type="radio" name="question-13" id="question-13h-${counter}" value="nee">
            <label for="question-13h-${counter}">Kleinkind</label>
        </div>
        <div class="radioBtn-wrapper individual-radio">
            <input type="radio" name="question-13" id="question-13i-${counter}" value="nee">
            <label for="question-13i-${counter}">Achterkleinkind</label>
        </div>
        <div class="radioBtn-wrapper individual-radio">
            <input type="radio" name="question-13" id="question-13j-${counter}" value="nee">
            <label for="question-13j-${counter}">Algemeen nut beogende instelling (ANBI)</label>
        </div>
        <div class="radioBtn-wrapper individual-radio">
            <input type="radio" name="question-13" id="question-13k-${counter}" value="nee">
            <label for="question-13k-${counter}">Sociaal belang behartigende instelling (SBBI)</label>
        </div>
        <div class="radioBtn-wrapper individual-radio">
            <input type="radio" name="question-13" id="question-13l-${counter}" value="nee">
            <label for="question-13l-${counter}">Anders</label>
        </div>
        <h3>Erfdelen, legaten en legitieme portie</h3>
        <p>Wat is het erfdeel van deze verkrijger? Geef het erfdeel op als breuk, bijvoorbeeld 1/4, of als percentage. Krijgt deze
            verkrijger alleen een legaat of doet deze verkrijger een beroep op zijn legitieme portie? Vul dan 0/1 in.</p>
        <div class="form-group fraction">
            <label for="fractionAcquirer-${counter}">Breuk</label>
            <input type="text" placeholder="" required name="fractionAcquirer" id="fractionAcquirer-${counter}" minlength="1" maxlength="5" pattern="^[1-9][0-9]{5}$" title="Vul alleen getallen in">
            <span data-error>&#9888; Alleen getallen toegestaan</span>                        
            <p>/</p>
            <input type="text" placeholder="" required name="fractionSecondAcquirer" id="fractionSecondAcquirer-${counter}" minlength="1" maxlength="5" pattern="^[1-9][0-9]{5}$" title="Vul alleen getallen in">
            <span data-error>&#9888; Alleen getallen toegestaan</span>
        </div>
        <div class="form-group percentage">
            <label for="percentageAcquirer-${counter}">Percentage</label>
            <input type="text" placeholder="" required name="percentageAcquirer" id="percentageAcquirer-${counter}" minlength="1" maxlength="5" pattern="^[1-9][0-9]{3}$" title="Vul een juist percentage in">
            <span data-error>&#9888; Alleen getallen toegestaan</span>
            <p>,</p>
            <input type="text" placeholder="" required name="percentageSecondAcquirer" id="percentageSecondAcquirer-${counter}" minlength="1" maxlength="5" pattern="^[1-9][0-9]{2}$" title="Vul een juist percentage in">
            <span data-error>&#9888; Alleen getallen toegestaan</span>
        </div>
        <p>Doet deze verkrijger een beroep op diens legitieme portie?</p>
        <div class="input-wrapper">
            <div class="radioBtn-wrapper">
                <input type="radio" name="question-14a" id="question-14a-a-${counter}" value="nee" required>
                <label for="question-14a-a-${counter}">Nee</label>
            </div>
            <div class="radioBtn-wrapper">
                <input type="radio" name="question-14a" id="question-14a-b-${counter}" value="ja">
                <label for="question-14a-b-${counter}">Ja.</label>
            </div>
        </div>
        <p>Is er sprake van vrucht-gebruik?</p>
        <div class="input-wrapper wrapper-column">
            <div class="radioBtn-wrapper">
                <input type="radio" name="question-14b" id="question-14b-a-${counter}" value="nee" data-show-hide="#question-14b" required>
                <label for="question-14b-a-${counter}">Nee</label>
            </div>
            <div class="radioBtn-wrapper">
                <input type="radio" name="question-14b" id="question-14b-b-${counter}" value="ja" data-show-hide="#question-14b">
                <label for="question-14b-b-${counter}">Ja.</label>
            </div>
            <div class="hidden" id="question-14b-${counter}">
                <p>Vraagt de partner van de overledene of iemand andersdie het vruchtgebruik van de woning krijgt om uitstel van betaling?</p>
                <div class="input-wrapper">
                    <div class="radioBtn-wrapper">
                        <input type="radio" name="question-14c" id="question-14b-c-${counter}" value="nee">
                        <label for="question-14b-c-${counter}">Nee</label>
                    </div>
                    <div class="radioBtn-wrapper">
                        <input type="radio" name="question-14c" id="question-14b-d-${counter}" value="ja">
                        <label for="question-14b-d-${counter}">Ja.</label>
                    </div>
                </div>
                <div class="form-group" id="usufruct-group-${counter}">
                    <label for="usufruct-${counter}">Waarde van het vruchtgebruik</label>
                    <input type="text" placeholder="" name="usufruct" id="usufruct-${counter}" pattern="^[a-zA-Z]+$" title="Alleen getallen">
                    <span data-error>&#9888; Alleen getallen toegestaan</span>
                </div>
            </div>
        </div>
        <p>Heeft deze verkrijger een partner die ook een erfdeel of een legaat van de overledene krijgt?</p>
        <div class="input-wrapper wrapper-column">
            <div class="radioBtn-wrapper">
                <input type="radio" name="question-14d" id="question-14c-a-${counter}" value="nee" required>
                <label for="question-14c-a-${counter}">Nee</label>
            </div>
            <div class="radioBtn-wrapper">
                <input type="radio" name="question-14d" id="question-14c-b-${counter}" value="ja" data-show-hide="#question-14d-${counter}">
                <label for="question-14c-b-${counter}">Ja.</label>
            </div>
            <div class="hidden" id="question-14d-${counter}">
                <div class="form-group">
                    <label for="namePartner-${counter}">Naam van partner</label>
                    <input type="text" placeholder="" name="namePartner" id="namePartner-${counter}" pattern="^[a-zA-Z]+$" title="Vul een juiste vestigingsplaats in">
                    <span data-error>&#9888; Alleen letters toegestaan</span>
                </div>
                <div class="form-group">
                    <label for="bsnPartner-${counter}">Burgerservicenummer partner</label>
                    <input type="text" placeholder="" required name="bsnPartner" id="bsnPartner-${counter}" minlength="9" maxlength="9" pattern="^[1-9][0-9]{8}$" title="Vul een juist BSN nummer in, startende met 1 of hoger">
                    <span data-error>&#9888; Alleen getallen, te beginnen met 1 of hoger</span>
                </div>
            </div>
        </div>
    `;
    const acquirerHolder = document.querySelector(".acquirer-wrapper");

    // Bepaald inhoud en positie van nieuwe persoon
    acquirerHolder.insertBefore(newAcquirer, acquirerHolder.lastElementChild);

    // Plaats het daadwerkelijke element
    acquirerHolder.appendChild(document.getElementById("addDelAcquire"));

    // Scroll smooth en laat element bovenin beginnen
    newAcquirer.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

function removeSection(){
    const acquireSection = document.querySelectorAll(".acquirer-wrapper section");
    if(acquireSection.length > 0){
        acquireSection[acquireSection.length - 1].remove();
        counter--;
    }
}

