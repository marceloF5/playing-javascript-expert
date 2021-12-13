class Fibonacci {
    *execute(input, current = 0, next = 1) {
        if(input === 0) {
            return 0
        }

        // return  the value
        yield current

        // Attr the function, but it does not return value
        yield* this.execute(input - 1, next, current + next)
    }
}

module.exports = Fibonacci