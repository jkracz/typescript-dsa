// given two sorted arrays, merge them into a single array

// will they always be numbers?
// can they have different sizes?
// are both stored in memory?

// [0,3,4,31], [4,6,30]

// top of mind approach
// 2 index iterators
// start a loop that will run iff both iterators are less than respective array sizes

const mergeSortedArrays = (a: Array<number>, b: Array<number>): Array<number> => {
    const sortedArray: Array<number> = new Array<number>();
    let aIndex: number = 0;
    let bIndex: number = 0;
    while (aIndex < a.length && bIndex < b.length) {
        if (a[aIndex] < b[bIndex]) {
            sortedArray.push(a[aIndex]);
            aIndex++;
        } else if (a[aIndex] > b[bIndex]) {
            sortedArray.push(b[bIndex]);
            bIndex++;
        } else {
            sortedArray.push(a[aIndex]);
            sortedArray.push(b[bIndex]);
            bIndex++;
            aIndex++;
        }
    }

    while (aIndex < a.length) {
        sortedArray.push(a[aIndex]);
        aIndex++;
    }
    while (bIndex < b.length) {
        sortedArray.push(b[bIndex]);
        bIndex++;
    }

    return sortedArray;
};

const sortedArr = mergeSortedArrays([0, 3, 4, 31, 50, 55, 555], [-1, 2, 4, 6, 30]);
console.log(sortedArr);
