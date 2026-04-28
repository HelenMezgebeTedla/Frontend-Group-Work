function findCheck(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log("Found it!");
    }
  }
}

const animals = ["cat", "dog", "cow", "donkey", "goat"];
findCheck(animals, "dog");
