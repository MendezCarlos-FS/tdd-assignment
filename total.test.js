// Requirements
// TDD - create tests for a module that will:
// obscure credit card number except the last 4 digits
// Test makes sure the function obscures credit card numbers that are
// between the length of 12 and 16 digits
// input: 123456789012
// output: XXXXXXXX9012

const { total, cardInput } = require("./total");


// create a module that takes in prices in an array and results the total

describe("Total Module tests", () => {
    test("As a user I want to be able to get the total after submitting various prices", ()=> {
        expect(total([3, 73.89, 99.99])).toEqual(176.88);
    });
});

describe("Credit Card tests", () => {
    test("As a user, I want to input my credit card number and have it only display the last four digits", () => {
        expect(cardInput("123456789012")).toEqual("XXXXXXXX9012");
        expect(cardInput("1234567890123")).toEqual("XXXXXXXXX0123");
        expect(cardInput("12345678901234")).toEqual("XXXXXXXXXX1234");
        expect(cardInput("123456789012345")).toEqual("XXXXXXXXXXX2345");
        expect(cardInput("1234567890123456")).toEqual("XXXXXXXXXXXX3456");
    });

    test("As a user, I want to be let known an invalid credit card number has been input if it's too short", () => {
        expect(cardInput("12345678901")).toEqual("Invalid Credit Card");
    })

    test("As a user, I want to be let known an invalid credit card number has been input if it's too long", () => {
        expect(cardInput("12345678901234567")).toEqual("Invalid Credit Card");
    })
});