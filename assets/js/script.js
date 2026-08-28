var characters = [
    "Garfield",
    "Odie",
    "Jon",
    "Nermal",
    "Arlene"
];

// Picks a random character and logs it to the console
function greetRandomCharacter() {
    var pick = characters[Math.floor(Math.random() * characters.length)];

    console.log("Hello from " + pick + "!");

    return pick;
}

// Only run after the page has loaded
document.addEventListener("DOMContentLoaded", function () {
    console.log("Garfield page loaded!");
    greetRandomCharacter();
});

function greetRandomCharacter() {
    var pick = characters[Math.floor(Math.random() * characters.length)];

    console.log("Hello from " + pick + "!");

    return pick;
}

greetRandomCharacter()
