return function  (input, n) {
    if (typeof input !== 'string') return input

    if (input.length > n) {
        return input.substring(0, n) + '...';
    }

    return input;

}