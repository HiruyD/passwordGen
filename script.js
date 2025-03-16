// Array of characters to be used in password generation
let characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
let characters3 = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of special characters to be optionally included in password generation
let characters2 = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

// Boolean to track whether special characters should be included
let sym = false;
let upper = false;

// Function to toggle the inclusion of special characters in the password
function toggleSymbol() {
  sym = !sym; // Toggle the boolean value
  if (sym) {
    // If sym is true, concatenate characters2 to characters
    characters = characters.concat(characters2);
  } else {
    // If sym is false, filter out characters2 from characters
    characters = characters.filter((char) => !characters2.includes(char));
  }
}

function toggleupper() {
  upper = !upper; // Toggle the boolean value
  if (upper) {
    characters = characters.filter((char) => !characters3.includes(char));
  } else {
    characters = characters.concat(characters3);
  }
}

// Function to generate a random password
function generatePassword() {
  let password = "";
  // Generate the first password
  for (let i = 0; i < 15; i++) {
    const random = Math.floor(Math.random() * characters.length);
    password += characters[random];
  }
  // Update the first password span with the generated password
  document.getElementById("password1").textContent = password;

  let password2 = "";
  // Generate the second password
  for (let i = 0; i < 15; i++) {
    const random = Math.floor(Math.random() * characters.length);
    password2 += characters[random];
  }
  // Update the second password span with the generated password
  document.getElementById("password2").textContent = password2;
}

// Function to toggle the theme between light and dark
function toggleTheme() {
  document.body.classList.toggle("dark-theme");
}

// Function to copy the text content of an element to the clipboard
function copyToClipboard(element) {
  const text = element.textContent;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Copied: " + text); // Alert the user that the text has been copied
    })
    .catch((err) => {
      console.error("Error copying text: ", err); // Log any errors that occur
    });
}
