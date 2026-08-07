// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================
//
// TASK: Student Record Management System
//
// Build a console-based program that stores and manages student information.
// Each student is represented as a JavaScript object containing:
//
//   - name   : the student's full name  (string)
//   - id     : a unique student ID number (number, e.g. 20240001)
//   - scores : an array of scores from multiple assessments (e.g. [75, 88, 90])
//
// Example object:
//   { name: "Alice Mensah", id: 20240001, scores: [78, 85, 90] }
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_08_student_records.js
//
// -----------------------------------------------------------------------------
// FEATURES YOUR PROGRAM MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Add a Student
//      - Ask the user to enter the student's name and ID.
//      - Ask how many scores to enter, then collect each score one by one.
//      - Save the student object and confirm it was added.
//
//   2. Display All Students
//      - Print a formatted table showing every student's:
//          Name, ID, individual scores, and their average score.
//      - If no students have been added yet, print a message saying so.
//
//   3. Calculate Average Score for a Specific Student
//      - Ask the user to enter a student ID.
//      - Find the student and print their average score.
//      - If the ID is not found, print an error message.
//
//   4. Quit
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ================================
//      STUDENT RECORD SYSTEM MENU
//   ================================
//   1. Add student
//   2. Display all students
//   3. Calculate average score
//   4. Quit
//   Enter your choice (1-4):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Enter your choice (1-4): 1
//   Student name: Alice Mensah
//   Student ID: 20240001
//   How many scores? 3
//   Enter score 1: 78
//   Enter score 2: 85
//   Enter score 3: 90
//   Student "Alice Mensah" added successfully.
//
//   Enter your choice (1-4): 3
//   Enter student ID: 20240001
//   Alice Mensah's average score: 84.33
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Store all student records in an array of objects.
// - Average scores must be displayed to 2 decimal places (use .toFixed(2)).
// - Each feature MUST be in its own function (see scaffold below).
// - Handle invalid menu choices and missing student IDs gracefully.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

let students = [];

// -----------------------------------------------------------------------------
// Function: calculateAverage
// Helper that computes the average of a scores array using a loop.
// -----------------------------------------------------------------------------
function calculateAverage(scores) {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
}

// -----------------------------------------------------------------------------
// Function: addStudent
// Prompts for name, ID, and a set number of scores, then stores the
// student object in the array.
// -----------------------------------------------------------------------------
function addStudent() {
  const name = readlineSync.question("Student name: ");
  const id = parseInt(readlineSync.question("Student ID: "));

  const numScores = parseInt(readlineSync.question("How many scores? "));
  const scores = [];

  for (let i = 0; i < numScores; i++) {
    const score = parseFloat(readlineSync.question(`Enter score ${i + 1}: `));
    scores.push(score);
  }

  const student = { name: name, id: id, scores: scores };
  students.push(student);

  console.log(`Student "${name}" added successfully.`);
}

// -----------------------------------------------------------------------------
// Function: displayAllStudents
// Prints a formatted table of every student's name, ID, scores, and average.
// -----------------------------------------------------------------------------
function displayAllStudents() {
  if (students.length === 0) {
    console.log("No students have been added yet.");
    return;
  }

  console.log("\nName                 ID          Scores               Average");
  console.log("----------------------------------------------------------------");

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const avg = calculateAverage(student.scores);

    const namePart = student.name.padEnd(20);
    const idPart = student.id.toString().padEnd(12);
    const scoresPart = student.scores.join(", ").padEnd(20);
    const avgPart = avg.toFixed(2);

    console.log(`${namePart} ${idPart} ${scoresPart} ${avgPart}`);
  }
}

// -----------------------------------------------------------------------------
// Function: calculateStudentAverage
// Asks for a student ID, finds the matching student, and prints their
// average score. Prints an error if not found.
// -----------------------------------------------------------------------------
function calculateStudentAverage() {
  const id = parseInt(readlineSync.question("Enter student ID: "));

  let foundStudent = null;
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      foun
