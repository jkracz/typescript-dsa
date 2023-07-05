//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
// what is the first recurring character?
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input: number[]): number | undefined {
    // loop through the array
    // use a hash table to keep track of how many times you've seen a number

    const recurringChars: any = {};
    for (let num of input) {
        if (recurringChars[num]) {
            return num;
        } else {
            recurringChars[num] = 1;
        }
    }
    return undefined;
}

// O(n) time and space complexity

const a: number[] = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const b: number[] = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const c: number[] = [2, 3, 4, 5];
const bonus: number[] = [2, 5, 5, 2, 3, 5, 1, 2, 4];

console.log(firstRecurringCharacter(a));
console.log(firstRecurringCharacter(b));
console.log(firstRecurringCharacter(c));
console.log(firstRecurringCharacter(bonus));

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
