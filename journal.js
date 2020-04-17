// journalEntry Object, will be filled by the user-filled form in index.html
const journalEntry = {
    date : "4/13/2020",
    conceptsCovered : "JavaScript and Objects",
    entry : "We covered the beginning chapters of Book 2, and reviewed how to create and navigate Objects in JavaScript",
    mood : "Okayy"
}

console.log(journalEntry)

//array for storing journal entries
let journalEntryArray = [];

//pushes the newest journal entry to the array
journalEntryArray.push(journalEntry);

//crates an HTML structure from a journalEntry Object
const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
    <h1>${journalEntry.conceptsCovered}</h1>
    <div class="entry">${journalEntry.entry}</div>
    <div class="mood">${journalEntry.mood}</div>
    <div class="date">${journalEntry.date}</div>
    `
}


const renderEntries = (journalEntryArray) =>{
    let html = document.querySelector(".entry-log");
    for (let i=0; i < journalEntryArray.length; i++){
        html.innerHTML += makeJournalEntryComponent(journalEntryArray[i]);
    }
}

renderEntries(journalEntryArray);