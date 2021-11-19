
//Reference entry collection
var entryRef = firebase.database().ref('entries');

// Listen for entry form submit
document.getElementById('entryForm').addEventListener('submit', entryFormSubmit);


//Submit Entry Form
function entryFormSubmit(e) {
    e.preventDefault();

    //Get Values
    var title = getInputVal('title');

    saveEntry(title);



}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save the entry to the database in Firebase
function saveEntry(title) {
    var newEntryRef = entryRef.push();

    newEntryRef.set({
        title: title
    });
}