import renderEntries from "./DOMPrinter.js"
import createObjectsFromAPI from "./apiManager.js"
import journalEntryArray from "./array.js"

createObjectsFromAPI();

//Adds an event listener to the submit button
document.querySelector("#submit-button").addEventListener("click", function() {
    
    //collects data from the user input fields to add to the journal entry array
    let dateValue = document.querySelector("#journalDate").value;
    let conceptValue = document.querySelector("#conceptsCovered").value;
    let entryValue = document.querySelector("#journalEntry").value;
    let moodValue = document.querySelector("#journalMood").value;
    //creates a new journal entry object based on the input
    const newEntryObject = {
        date: dateValue,
        conceptsCovered: conceptValue,
        entry: entryValue,
        mood: moodValue
    }
    
    //Adds the new entry object to our array, then calls the render function to print it to the DOM
    journalEntryArray.push(newEntryObject);
    renderEntries(journalEntryArray);
})

