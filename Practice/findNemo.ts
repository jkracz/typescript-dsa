// const nemo: Array<string> = new Array<string>(10000).fill("nemo");
const nemo: Array<string> = ["nemo", "fish"];

function findNemo(array: Array<string>): void {
  for (let i: number = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("found nemo at: ", i);
    }
  }
}

findNemo(nemo);

// O(n) runtime
