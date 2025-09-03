/* Task-01 */
function findLowestNumber(numbers) {
    let min = numbers[0];
    for (const num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    return min;
}

const heights2 = [167, 190, 120, 165, 137];
const lowestNumber = findLowestNumber(heights2);
console.log(lowestNumber);

const min = Math.min(...heights2);
console.log(min);