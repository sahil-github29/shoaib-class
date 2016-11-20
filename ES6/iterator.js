let sum = [],
numbers = [1,2,3, "A", 4, "B", "C"];
Array.prototype.test = "44"

for(let i = 0; i < numbers.length; i++) {
    sum.push(numbers[i])
}
sum.push("========")
for(let i in numbers) {
    sum.push(numbers[i])
}

module.exports = sum;
