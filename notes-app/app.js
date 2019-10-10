const chalk = require("chalk");
const yargs = require("yargs");

const getNotes = require("./notes.js")

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
        console.log(`Title: ${argv.title}`);
        console.log(`Body: ${argv.body}`)
    }
})

//remove command
yargs.command({
    command: "remove",
    describe: "deletes a note",
    handler: () => {
        console.log("Delete dat note!")
    }
})

//read command
yargs.command({
    command: "read",
    describe: "read a note",
    handler: () => {
        console.log("I can read dat note.")
    }
})
//list command
yargs.command({
    command: "list",
    describe: "list the notes",
    handler: () => {
        console.log("I can read deez notes.")
    }
})

//add, remove, read, list

console.log("yargs", yargs.argv);