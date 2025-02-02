function add(numbers) {
    if(numbers.length === 0) return 0;
    const numArray = numbers.split(/,|\n/).map(Number);
    return numArray.reduce((sum, num) => sum+num, 0);
}

module.exports = add;