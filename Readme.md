
# Proces verslag
## Week 1
Deze week beni ik begonnen met de opdracht. Ik heb mij voorgenomen om zo min mogelijk met de styling te doen en juist veel aandacht aan functionaliteiten te besteden.
Voordat ik kon beginnen met het coderen moesten eerst de bouwstenen in kaart worden gebracht. Hierdoor wist ik waar de focuspunten in de opdracht lagen en kon ik van te
voren eventuele patronen herkennen. Dit zijn nog niet alle bouwstenen. Volgende week wil ik deze met de docent bespreken en aanvullen waar dat kan. 
Hieronder staan mijn eerste ideeën van de bouwstenen vermeld:

**Zorg ervoor dat het formulier ook met een mobiele telefoon, screen reader en het toetsenbord te gebruiken is**

- Zorg voor duidelijke labels en DOM element gebruik (h1, h2, etc..). Hierdoor kan de screenreader en toetsenbord duidelijk door de structuur heenkomen.
- Maak gebruik van een duidelijke :hover/:focus en :outline

**Zorg ervoor dat het formulier overzichtelijk blijft.**
- Een ontwerp volgens de huisstijl van de belastingdienst. Alle elementen die in de pdf op een pagina voorkomen opdelen in een fieldset en deze tonen
- Geef sommige Fields een css class zodat ze hetzelfde gedrag vertonen

**Zorg dat de gebruikers makkelijk inzicht krijgen in de delen van het formulier die ze al ingevuld hebben of nog moeten invullen.**
- Met html de juiste input types meegeven (ook required) en via css en js animatie toevoegen als het correct is ingevuld. Groen bij goed en rood bij verkeerd. 
- Toon sommige data alleen als bijv een radiobutton wordt geselecteerd. (D.m.v. :has(), :valid/:invalid)
- Eventueel tekst als ‘Ga naar vraag 3c’ een anchor tag gebruiken en deze naar de fieldset sturen die bij de tekst hoort.
- Niet op elke pagina opnieuw om het burgerservicenummer vragen (bovenin)

**Zorg voor een helder grafisch ontwerp.**
- Een klein ontwerp maken volgens de huisstijl van de belastingdienst.

**Zorg ervoor dat, als de gebruiker het formulier verlaat, de ingevulde gegevens bij het volgende bezoek met dezelfde browser weer beschikbaar zijn.**
- D.m.v. localstorage kan je de waardes opslaan. Als localstorage wordt uitgeschakeld heb ik geen idee

**Zorg voor heldere, valide HTML, met gebruikmaking van de juiste input types voor de velden.**
- Input field text
- Input field email
- Input field number
- Radio buttons
- Input field date

**Zorg ervoor dat eventuele helpteksten (die je in de toelichting kan vinden) door de gebruiker te vinden en gebruiken zijn.**
- D.m.v. popover kan je een knopje met vraagteken neerzetten.

**Zorg ervoor dat de gebruiker, als het formulier helemaal is ingevuld, een duidelijke conclusie en samenvatting ziet.**
- Alle waardes in de velden selecteren en deze bij elkaar als een samenvatting tonen

## Week 2

Deze week heb ik de bouwstenen aangevuld. Concreet gemaakt ziet de lijst er nu als volgt uit:

- Herhalende patronen (Meerdere gebruikers)
- Localstorage
- Progress bar
- Styling
- Formulier validatie
- Show/hide met JS

Hiernaast heb ik de eerste paar velden van het formulier gemaakt. Elke vraag staat in een fieldset. Hierdoor worden de vragen netjes gegroepeerd en is er een duidelijke hierarchie.
Ik heb voor het eerst gewerkt met een regular expression (regex) met daarbij een pattern. Hierdoor zijn voorbeelden te zien:
<img width="1207" alt="Scherm­afbeelding 2024-03-21 om 23 48 12" src="https://github.com/Martino538/Browser-technologies/assets/32341318/1e973546-9e89-4b20-93f8-cc7c508f0c1c"></br>

Het 
<img width="1785" alt="Scherm­afbeelding 2024-03-21 om 23 45 35" src="https://github.com/Martino538/Browser-technologies/assets/32341318/98b6daf0-d90c-4d75-9721-b9afae22f0af"></br>

## Week 3
Deze week heb mijn werk niet gecommit dus is het lastig te achterhalen welke stappen ik precies heb ondernomen om tot mijn resultaat van deze week te komen. Ik heb geleerd hoe je
kunt switchen tussen secties d.m.v. de target selector in CSS. Ik heb het formulier verder uitgebreid en ben gaan werken met 'show/hide', het tonen en verbergen van specifieke
vragen. Dit heb ik gemaakt d.m.v. CSS. Als er een bepaalde knop is geselecteerd d.m.v. :has() worden de verborgen vragen getoond, anders niet. Toen ik dit vrijdag aan PPK liet 
zien vond hij dat ik goed op weg was, maar dit beter en makkelijker met javascript kon oplossen. Komende week wil ik dit gaan ombouwen en de overige bouwstenen toevoegen.

Het switchten van secties d.m.v. target:</br>
<img width="504" alt="Scherm­afbeelding 2024-03-22 om 00 04 25" src="https://github.com/Martino538/Browser-technologies/assets/32341318/d76ddda8-8ea7-4499-93a1-0dfa14f6ceff">

Het werken met :has() om vragen te tonen/verbergen:</br>
<img width="410" alt="Scherm­afbeelding 2024-03-22 om 00 02 21" src="https://github.com/Martino538/Browser-technologies/assets/32341318/ebe37c35-7e54-4ec8-af97-8f29e7565fbe"></br>

## Week 4
Deze week was hard ploeteren, omdat ik hier de meeste features in het formulier heb toegevoegd. Een aantal dingen die ik heb geleerd d.m.v. javascript:
- Het instellen van een minimum en maximum datum om uit te kiezen in een date picker
- Het laten zien van een foutmelding bij een input veld, met tekst erin.
- Het werken met Local Storage
- Het tonen en verbergen van vragen door te werken met data attributen
- Dupliceer patronen om velden voor meerdere gebruikers in te voeren met append

Daarnaast heb ik ook geleerd dat niet elke vraag (1a, 1b, 1c etc..) een eigen fieldset moet krijgen. Dat is iets te overmoedig, dus heb ik elke vraag (vraag1, vraag 2 etc..) 
omgebouwd en in een eigen fieldset gezet.

Als laatste heb ik met CSS geleerd om met zowel valid als user-valid te werken. In dit formulier wordt alleen user-valid gebruikt, maar ik weet nu wel het verschil tussen 
beide en wanneer je het kan toepassen. Als een fieldset set user-valid is, dan wordt de progress bar groen gemaakt. Als een fieldset user-invalid is, dan wordt het rood.

<img width="1212" alt="Scherm­afbeelding 2024-03-22 om 00 00 05" src="https://github.com/Martino538/Browser-technologies/assets/32341318/17924844-2d12-449b-958c-5227d9c824b5"></br>
