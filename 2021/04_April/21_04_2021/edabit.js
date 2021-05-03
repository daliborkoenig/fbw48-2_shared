function unlucky13(nums) {
	return nums.filter(item => item % 13 != 0)
}

let data1= [53, 182, 435, 591, 637] //➞ [53, 435, 591]
// 182 and 637 are divisible by 13.

let data2 = [24, 316, 393, 458, 1279] //➞ [24, 316, 393, 458, 1279]
// No numbers in the array are divisible by 13.

let data3 = [104, 351, 455, 806, 871] //➞ []
// All numbers in the array are divisible by 13.
console.log(unlucky13(data1));