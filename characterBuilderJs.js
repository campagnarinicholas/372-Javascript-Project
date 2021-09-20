class Character {
    constructor(name, characterClass, level, dob) {
        // private variables aren't things
        // you can implement them
        // if you try hard 
        this.name = name;
        this.characterClass = characterClass;
        this.level = level;
        this.dob = new Date(dob.valueAsNumber);
    }

    getAge() {
        let now = new Date();
        let year = now.getFullYear() - this.dob.getFullYear();
        let month = now.getMonth() - this.dob.getMonth();
        // if month is negative that means the year is wrong too
        if (month < 0) {
            month = 12 + month;
            year -= 1;
        }
        return [year, month];
    }
}

let characters = [];

function buildCharacter() {
    // get all our stuff from html inputs
    charName = document.getElementById("name").value;
    level = document.getElementById("level").value;
    charClass = document.getElementById("class").value;
    dob = document.getElementById("dob");
    // create a new character with given attributes and add to arr
    characterNew = new Character(charName, charClass, level, dob);
    characters.push(characterNew);

    // set up table with ugly html
    nameLine = "<tr><th>Name</th><th>Level</th><th>Class</th><th>DoB</th></tr>";
    classLine = "";
    for (character of characters) { // for of loops very useful for ease of reading
        nameLine += "<tr>"
        nameLine += "<td>" + character.name + "</td>";
        nameLine += "<td>" + character.level + "</td>";
        nameLine += "<td>" + character.characterClass + "</td>";
        nameLine += "<td>" + character.getAge()[0] + " Years and " + character.getAge()[1] + " months</td>";
        nameLine += "</tr>";

    }  
    // add to our html table and clear form
    document.getElementById("table").innerHTML = nameLine;
    document.getElementById("form").reset();
}