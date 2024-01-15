// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [5, 8, 5, 7, 7, 4, 4, 8, 8, 3, 6, 8, 5, 6, 9];
// Kan zijn dat de uitkomsten niet meer kloppen met oorspronkelijke opdracht, omdat ik de cijfers in deze array heb aangepast om mijn code te kunnen checken.

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6


//1 loop de array om te controleren op cijfers 8 of hoger (>= 8)
//1a zorg dat loop altijd even lang is als array (.length)
//2 maak een counter die bijhoudt hoeveel cijfers voldoen aan voorwaarde
//3 log aantal cumLaudeGraduates

let students = 0


for (let i = 0; i < grades.length; i++) {
    if ( grades[i] >= 8) {
        students++
    }
}
console.log(students)


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3


function cumLaude(grades) {
   let students = 0


for (let i = 0; i < grades.length; i++) {
    if ( grades[i] >= 8) {
        students++
    }
}
return students
}

console.log(cumLaude([8, 9, 4, 6, 10]))


/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend? Alle cijfers optellen en delen door aantal
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen? alle cijfers
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten? array.length
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

let sumOfGrades = 0
let numberOfGrades = 0

for (let i = 0; i < grades.length; i++) {
    sumOfGrades += grades[i]
    numberOfGrades++
    average = sumOfGrades / numberOfGrades
}

console.log(average)

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

function averageGrades(grades) {
    let sumOfGrades = 0
    let numberOfGrades = 0

    for (let i = 0; i < grades.length; i++) {
        sumOfGrades += grades[i]
        numberOfGrades++
        average = sumOfGrades / numberOfGrades
    }

    return average
}

console.log(averageGrades([8, 9, 4, 6, 10]))

/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

// Om een afgerond nummer als getal terug te geven eerst (getal*10) (of meer nullen, elke 0=1decimaal)/10(of meer nullen)
console.log(Math.round(averageGrades(grades)*100)/100)


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorg ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

// 1 door de lijst 'grades' itereren in for-loop: grades.length
// 2 is cijfer hoger dan variabele gradeCheck (naam ivm latere functie highestGrade?
// 3 hoogste cijfer opslaan in variabele gradeCheck dmv if statement

let gradeCheck = 0

for (let i = 0; i < grades.length; i++) {
    if (grades[i] > gradeCheck) {
        gradeCheck = grades[i]
    }
}

console.log(gradeCheck)

/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

function highestGrade(grades) {
    let gradeCheck = 0

    for (let i = 0; i < grades.length; i++) {
        if (grades[i] > gradeCheck) {
            gradeCheck = grades[i]
        }
    }
    return gradeCheck
}

console.log(highestGrade([8, 9, 4, 6, 10]))