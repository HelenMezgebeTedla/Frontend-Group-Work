function findLargestNumber(nums) {
    if (nums.length === 0) {
        return undefined; 
    }

    let largest = nums[0]; 

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i]; 
        }
    }

    return largest; 
}

const numbers = [3, 17, 8, 22, 5];
console.log(findLargestNumber(numbers));