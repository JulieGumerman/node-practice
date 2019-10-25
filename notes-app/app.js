
const yargs = require("yargs");

const Notes = require("./notes.js")

yargs.version("1.1.0");

//add command
yargs.command({
    command: "add",
    describe: "add a new note",
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "note body",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        Notes.addNote(argv.title, argv.body)
    }
})

//remove command
yargs.command({
    command: "remove",
    describe: "deletes a note",
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: "string"
        }
    },
    handler: (argv) => {
        Notes.removeNote(argv.title);
    }
})

//read command
yargs.command({
    command: "read",
    describe: "read a note",
    builder: {
        title: {
            describe: "note title",
            demandOption: true,
            type: "String"

        }
    },
    handler: (argv) => {
        Notes.readNote(argv.title);
    }
})
//list command
yargs.command({
    command: "list",
    describe: "list the notes",
    handler: () => {
        Notes.listNotes();
    }
})

//add, remove, read, list

console.log("yargs", yargs.argv);