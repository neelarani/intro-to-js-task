/* ********* Task-1 *********
You went to the supermarket to buy some oranges and apples. Calculate how much money the shopkeeper will return.

Input:
The first line of the input is the taka you have. The second line is the cost of 1 kg of oranges and 1 kg of apples.

Output:
Print the result.

Sample Input:
1000
700

Sample Output:
300  */

const taka = parseInt(prompt('Enter the amount of money you have:'));

const oranges = parseInt(prompt('Enter oranges price :'));
const apples = parseInt(prompt('Enter apple price :'));

const totalCost = oranges + apples;
const returnTaka = taka - totalCost;

console.log('Return Taka :', returnTaka);
