/* Task-02 */
function findSmallestName(array) {
    let small = array[0];
    for (const item of array) {
        if (item.length < small.length) {
            small = item;
        }
    }
    return small;
}

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
const smallestName = findSmallestName(heights2);
console.log('Here smallest name is:', smallestName);