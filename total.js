const total = (array) => {
    return array.reduce((prev, curr) => {
        return prev + curr;
    });
};


const cardInput = (cardNumber) => {
    if (cardNumber.length < 12 || cardNumber.length > 16) {
        return "Invalid Credit Card";
    }

    const splitString = [...cardNumber].map((letter, index) => {
        if (index >= cardNumber.length - 4) {
            return letter;
        }

        return "X";
    });

    return splitString.reduce((prev, curr) => prev + curr);
}

module.exports = { total, cardInput }