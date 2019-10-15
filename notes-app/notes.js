const fs = require("fs");
const chalk = require("chalk");

const getNotes = function() {
    return "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(note => {
        return note.title === title;
    })


    if (duplicateNotes.length === 0 ) {
        notes.push({
            title: title,
            body: body
         })
         console.log(chalk.bgGreen("Note added"))
        saveNotes(notes);
    }   else {
         console.log(chalk.bgRed("Note title taken!"))
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


        if(updatedNotes.length < notes.length) {
            console.log(chalk.bgGreen("Note removed"));
            saveNotes(updatedNotes);
        } else {
            console.log(chalk.bgRed("Note not found"))
        }

       
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote

}