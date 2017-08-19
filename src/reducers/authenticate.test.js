import authenticate from './authenticate';

let actions = [
    {
        "type": "LOGIN",
        "username": "admin",
        "password": "whatsmypass"
    }, 

    {
        "type": "LOGIN",
        "username": "ajit",
        "password": "whatsmypass"
    },

    {
        "type": "LOGIN",
        "username": "admin",
        "password": "ajitnath"
    },

    {
        "type": "LOGIN",
        "username": "ajit",
        "password": "234"
    },

    {
        "type": "LOGOUT" 
    },

    {
        "type": "THIS AIN'T TRUE",
        "username": "admin",
        "password": "whatsmypass"
    }   
]

let results = [
    {
        "error": null,
        "authenticated": true
    },
    {
        "error": "AUTH_ERROR",
        "authenticated": false
    },
    {
        "error": "AUTH_ERROR",
        "authenticated": false
    },
    {
        "error": "AUTH_ERROR",
        "authenticated": false
    },
    {
        "error": null
    }, 
    {
        "error": null,
    }
]

test("authenticating with correct username and password", () => {
    let reducerResult = authenticate ({ error: null }, actions[0])
    expect(reducerResult).toEqual(results[0])
});

test("authenticating with incorrect username and correct password", () => {
    let reducerResult = authenticate ({ error: null }, actions[1])
    expect(reducerResult).toEqual(results[1])
});

test("authenticating with correct username and incorrect password", () => {
    let reducerResult = authenticate ({ error: null }, actions[2])
    expect(reducerResult).toEqual(results[2])
});

test("authenticating with incorrect username and incorrect password", () => {
    let reducerResult = authenticate ({ error: null }, actions[3])
    expect(reducerResult).toEqual(results[3])
});

test("testing unknown action type", () => {
    let reducerResult = authenticate ({ error: null }, actions[5])
    expect(reducerResult).toEqual(results[5])
});


test("Testing logout", () => {
    let reducerResult = authenticate ({ error: null }, actions[4])
    expect(reducerResult).toEqual(results[4])
});