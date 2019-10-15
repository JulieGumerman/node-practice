const fs = require("fs");

const getNotes = function() {
    return "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(note => {
        return note.title = title;
    })


    if (duplicateNotes.length ===0 ) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
    }   else {
        console.log("Note title taken!")
    } 

}

const loadNotes = () => {

    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }

}

const saveNotes = notes => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("notes.json", dataJSON)
}

const removeNote = (title) => {
    const notes = loadNotes();
    let updatedNotes = notes.filter(note => {
        return note.title !== title;
    })
    let notesJSON = JSON.stringify(updatedNotes);
    fs.writeFileSync("notes.json", notesJSON)
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote

}