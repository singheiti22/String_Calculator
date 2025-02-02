function add(numbers) {
    if(numbers.length === 0) return 0;

    let delimiter = /,|\n/;

    if(numbers.startsWith('//')) {
        const parts = numbers.split('\n');
        delimiter = new RegExp(parts[0].slice(2));
        numbers = parts[1];
    }

    const numArray = numbers.split(delimiter).map(Number);

    const negativeNumbers = numArray.filter(num => num < 0);

    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(", ")}`);
    }
    
    return numArray.reduce((sum, num) => sum+num, 0);
}

module.exports = add;