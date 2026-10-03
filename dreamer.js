// Module: Values, Data Types, and Operations
// Uses descriptive variable names for Maya's name, pages read,
// weekly goal, and pages remaining. Subtract pages read from the goal.
const readerName = "Maya";
const pagesRead = 85;
const weeklyGoal = 500;
const pagesRemaining = weeklyGoal - pagesRead;

console.log("Pages remaining:", pagesRemaining);

// Module: Stringing Characters Together
// Combine Maya's name and page count in a message using a template literal.
const progressMessage = `${readerName} has read ${pagesRead} pages this week.`;

console.log(progressMessage);

// Module: Control Structures and Logic
// Uses a Boolean expression to check whether Maya met her weekly goal.
const metWeeklyGoal = pagesRead >= weeklyGoal;

if (metWeeklyGoal) {
  console.log(`Congratulations, ${readerName}! You met your goal.`);
} else {
  console.log(
    `${readerName}, read ${pagesRemaining} more pages to meet your goal.`
  );
}

// Module: Building Arrays
// Create an array containing Maya's three books.
const readingList = ["Score", "Reel", "The Close-Up"];

console.log("Reading list:", readingList);

// Module: Using Arrays
// Store each book and its reading status in a two-dimensional array.
const bookDetails = [
  ["Score", "Finished"],
  ["Reel", "In progress"],
  ["The Close-Up", "Not started"],
];

// Print the book status and each book with its status.
console.log("Book Status:");
console.log(`${bookDetails[0][0]}\t${bookDetails[0][1]}`);
console.log(`${bookDetails[1][0]}\t${bookDetails[1][1]}`);
console.log(`${bookDetails[2][0]}\t${bookDetails[2][1]}`);

// Module: Working With Loops
// Goes through the reading list and print each book title.
for (let i = 0; i < readingList.length; i++) {
  console.log("Current books:", readingList[i]);
};