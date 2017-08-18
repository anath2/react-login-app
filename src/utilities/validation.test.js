import { validate } from './validation'

let inputValid = [
    'ajit@myemail.com',
    'ajitnath',
    'password',
    'password'
]

let inputEmailPresent = [
    "admin@admin.com",
    "ajitnath",
    "password",
    "password"
]

let inputEmailNull = [
    "",
    "ajitnath",
    "password",
    "password"
]

let inputEmailInvalid = [
    "ajitnath@asdf",
    "ajitnath",
    "password",
    "password"
]

let usernameInvalid = [
    "ajitnath@asdf",
    "ajit nath",
    "password",
    "password"
]


let results = [
    {success: true, errors: {}},
    {success: false, errors: {email: "taken"}},
    {success: false, errors: {email: "empty"}},
    {success: false, errors: {email: "invalid"}},
    {success: false, errors: {email: "invalid", username: "invalid"}}
]

test("Valid values", () => {
    expect(validate(inputValid[0], inputValid[1], inputValid[2], inputValid[3])).toEqual(results[0])
});

test("Email taken", () => {
    expect(validate(inputEmailPresent[0], inputEmailPresent[1], inputEmailPresent[2], inputEmailPresent[3])).toEqual(results[1])
});

test("Email empty", () => {
    expect(validate(inputEmailNull[0], inputEmailNull[1], inputEmailNull[2], inputEmailNull[3])).toEqual(results[2])
});

test("Email invalid", () => {
    expect(validate(inputEmailInvalid[0], inputEmailInvalid[1], inputEmailInvalid[2], inputEmailInvalid[3])).toEqual(results[3])
});

test("Email invalid username invalid", () => {
    expect(validate(usernameInvalid[0], usernameInvalid[1], usernameInvalid[2], usernameInvalid[3])).toEqual(results[4])
});