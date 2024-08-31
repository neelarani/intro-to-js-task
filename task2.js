/* ********* Task-2 *********

Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample Input:
75.25, 65, 80, 35.45, 99.50

Sample Output:
71.04 */

const marks = [75.25, 65, 80, 35.45, 99.5];

const mark1 = parseFloat(marks[0]);
const mark2 = parseFloat(marks[1]);
const mark3 = parseFloat(marks[2]);
const mark4 = parseFloat(marks[3]);
const mark5 = parseFloat(marks[4]);

const average = (mark1 + mark2 + mark3 + mark4 + mark5) / 5;

console.log(average.toFixed(2));
