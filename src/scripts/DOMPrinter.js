//A function for rendering/printing our array of journal entries


const renderEntries = (journalEntryArray) =>{
    //Selects the entry log in the DOM (entry log is the space below the input form)
    let html = document.querySelector(".entry-log");
    //Clears the entry log before printing new HTML
    html.innerHTML = "";
    //Iterates through an array of entries, generates an HTML string for each entry, and adds them to the entry log HTML
    for (let i=0; i < journalEntryArray.length; i++){
        html.innerHTML += makeJournalEntryComponent(journalEntryArray[i]);
    }
}

const makeJournalEntryComponent = (journalEntry) => {
    // Returns the created HTML string
    return `
    <h1>${journalEntry.conceptsCovered}</h1>
    <div class="entry">${journalEntry.entry}</div>
    <div class="mood">${journalEntry.mood}</div>
    <div class="date">${journalEntry.date}</div>
    `
}

export default renderEntries;