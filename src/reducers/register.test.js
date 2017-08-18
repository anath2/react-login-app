import  { register } from './register';

let testCases = [
    {
        "type": "REGISTER", 
        "email": "ajitnath@whatsmyemail.com", 
        "username": "anath",
        "password1": "1234", 
        "password2": "1234"
    },
    {
        "type": "WHAT-THE-HELL",
        "email": "ajitnath@whatsmyemail.com", 
        "username": "anath",
        "password1": "1234", 
        "password2": "1234"

    }
]

let results = [
    {
        "errors": {},
        "success": true
    }, 

    {
        "errors": "unknown",
        "success": false
    }
]

test("Registration should be successful", () => {
    expect(register(testCases[0])).toEqual(results[0]);
})

test("Unknown action", () => {
    expect(register(testCases[1])).toEqual(results[1]);
})
