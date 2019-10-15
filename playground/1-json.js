const fs = require("fs");

// const book = {
//     title: "East of Eden",
//     author: "John Steinbeck"
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json")
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJson = dataBuffer.toString();
const user = JSON.parse(dataJson);

user.name = "Julie";
user.age = 37;

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON)
