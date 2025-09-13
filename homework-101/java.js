function greet(name) {
    return `Hello "${name}"`;
}

console.log(greet(`Вова`))

/* ======================================================================== */

const numbers = [1, 2, 20, 19, 6, 4, 35]

function outputNumbers(ab) {
    for (let i = 0; i < ab.length; i++) {
        if (ab[i] > 10) {
            console.log(ab[i])
        }
    }
}
outputNumbers(numbers)

/* ========================================================================= */


function calculate(a, b, operator) {
    switch(operator) {
        case 'plus':
        case '+':
            return 'a + b'

        case 'minus':
        case '-':
            return 'a - b'

        case 'multiplay':
        case '*':
            return 'a * b'

        case 'divide':
        case '/':
            return 'a / b'
    }
}
