const fs = require("fs");
const chalk = require("chalk");

const getNotes = function() {
    return "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes();


    const duplicateNote = notes.find(note => {
        note.title === title;
    })


    if (!duplicateNote) {
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

const listNotes = () => {
    const notes= loadNotes();

    console.log(chalk.inverse("Your notes"))

    notes.forEach(note => {
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes();
    const foundNote = notes.find(note => {
        note.title === title;
    })

    if(foundNote) {
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.bgRed("No note found!"))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote

}