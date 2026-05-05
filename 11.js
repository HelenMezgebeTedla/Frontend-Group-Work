function fizzBuzz() {
    for (let i = 1; i <= 30; i++) {
        const isdivisibleBy3 = i % 3 === 0;
        const isdivisibleBy5 = i % 5 === 0;

        if (isdivisibleBy3 && isdivisibleBy5) {
            console.log('FizzBuzz');
        } else if (isdivisibleBy3) {
            console.log('Fizz');
        } else if (isdivisibleBy5) {
            console.log('Buzz');
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();