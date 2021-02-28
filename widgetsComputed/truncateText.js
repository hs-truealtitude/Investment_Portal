return function  (input, n) {

    if (input.length > n) {
        return input.substring(0, n) + '...';
    }

    return input;

}