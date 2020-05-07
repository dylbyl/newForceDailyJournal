//Fetches journal entries from API
import renderEntries from "./DOMPrinter.js"
import journalEntryArray from "./array.js"

const createObjectsFromAPI = () =>{
    fetch("http://localhost:8088/entries")
    .then(r => r.json())
    .then(entries => {
        //For every entry in the API, fills in a new entry object...
        entries.forEach(entryObject => {
            const newEntryObject = {
                date : entryObject.date,
                conceptsCovered : entryObject.conceptsCovered,
                mood : entryObject.mood,
                entry : entryObject.entry
            }
            
            //...then pushes that entry to our journal entry array
            journalEntryArray.push(newEntryObject);
        });
    
        //Once the loop is finished and all out API entries are fetched, call the render function
        renderEntries(journalEntryArray);
    })

}

export default createObjectsFromAPI;
