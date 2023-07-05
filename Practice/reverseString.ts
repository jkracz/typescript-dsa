// create a function that reverses a string:
// "hi my name is joe"
// "eoj si eman ym ih"

// Should I keep capital letters where they are?
// Are we optimizing for space and time in any way?

// a string is essentailly an array of characters
// we could create a new array of characters and loop through the original backwards, adding each character to the new arr
// or we could start at both ends of the array and swap the letters in place

function reverseString(str: string): string {
    if (str.length < 2) {
        return str;
    }
    const strArr: Array<string> = str.split("");
    let start: number = 0;
    let end: number = strArr.length - 1;
    let holder: string;
    while (start < end) {
        holder = strArr[end];
        strArr[end] = strArr[start];
        strArr[start] = holder;
        start++;
        end--;
    }
    return strArr.join("");
}

function reverse2(str: string) {
    return str.split("").reverse().join("");
}

const reverse3 = (str: string): string => [...str].reverse().join("");

// const str: string = "hi my name is joe";
const str: string = "There are many letters in the alphabet!";
const reversedStr: string = reverse3(str);
console.log(reversedStr);
