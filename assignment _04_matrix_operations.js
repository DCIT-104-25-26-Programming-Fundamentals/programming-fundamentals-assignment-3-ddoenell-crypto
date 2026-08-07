// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

// -----------------------------------------------------------------------------
// Function: readMatrix
// Asks the user for the number of rows/columns, then reads each row as a
// line of space-separated numbers.
// -----------------------------------------------------------------------------
function readMatrix(label) {
  console.log(`\n-- Enter ${label} --`);
  const rows = parseInt(readlineSync.question("Enter number of rows: "));
  const cols = parseInt(readlineSync.question("Enter number of columns: "));

  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const line = readlineSync.question(`Enter row ${i + 1}: `);
    const rowValues = line.split(' ').map(Number);
    matrix.push(rowValues);
  }
  return matrix;
}

// -----------------------------------------------------------------------------
// Function: printMatrix
// Displays a matrix in a neat, aligned grid.
// -----------------------------------------------------------------------------
function printMatrix(matrix, label) {
  console.log(`\n${label}:`);
  for (let i = 0; i < matrix.length; i++) {
    let rowText = "";
    for (let j = 0; j < matrix[i].length; j++) {
      rowText += matrix[i][j].toString().padStart(5);
    }
    console.log(rowText);
  }
}

// -----------------------------------------------------------------------------
// Function: transposeMatrix
// Swaps rows and columns: result[j][i] = matrix[i][j]
// -----------------------------------------------------------------------------
function transposeMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let j = 0; j < cols; j++) {
    const newRow = [];
    for (let i = 0; i < rows; i++) {
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
  }
  return result;
}

// -----------------------------------------------------------------------------
// Function: addMatrices
// Adds two matrices of the same size element by element.
// -----------------------------------------------------------------------------
function addMatrices(matrixA, matrixB) {
  const rows = matrixA.length;
  const cols = matrixA[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    const newRow = [];
    for (let j = 0; j < cols; j++) {
      newRow.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(newRow);
  }
  return result;
}

// -----------------------------------------------------------------------------
// Function: multiplyMatrices
// Multiplies matrix A (M x N) by matrix B (N x P) using three nested loops.
// -----------------------------------------------------------------------------
function multiplyMatrices(matrixA, matrixB) {
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const colsB = matrixB[0].length;

  const result = [];

  for (let i = 0; i < rowsA; i++) {
    const newRow = [];
    for (let j = 0; j < colsB; j++) {
      let sum = 0;
      for (let k = 0; k < colsA; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      newRow.push(sum);
    }
    result.push(newRow);
  }
  return result;
}

// -----------------------------------------------------------------------------
// Main program
// -----------------------------------------------------------------------------
function main() {
  // ----- PART A: Transpose -----
  console.log("=== PART A: Transpose a Matrix ===");
  const matrix = readMatrix("the matrix to transpose");
  printMatrix(matrix, "Original Matrix");
  const transposed = transposeMatrix(matrix);
  printMatrix(transposed, "Transposed Matrix");

  // ----- PART B: Addition -----
  console.log("\n=== PART B: Add Two Matrices ===");
  const matrixA = readMatrix("Matrix A");
  const matrixB = readMatrix("Matrix B (must match size of A)");

  if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
    console.log("Error: Matrices must be the same size to add them.");
  } else {
    printMatrix(matrixA, "Matrix A");
    printMatrix(matrixB, "Matrix B");
    const sumMatrix = addMatrices(matrixA, matrixB);
    printMatrix(sumMatrix, "Sum (A + B)");
  }

  // ----- PART C: Multiplication -----
  console.log("\n=== PART C: Multiply Two Matrices ===");
  const matrixC = readMatrix("Matrix A (size M x N)");
  const matrixD = readMatrix("Matrix B (size N x P, rows must equal columns of A)");

  if (matrixC[0].length !== matrixD.length) {
    console.log("Error: Number of columns in A must equal number of rows in B.");
  } else {
    printMatrix(matrixC, "Matrix A");
    printMatrix(matrixD, "Matrix B");
    const productMatrix = multiplyMatrices(matrixC, matrixD);
    printMatrix(productMatrix, "Product (A x B)");
  }
}

main();
