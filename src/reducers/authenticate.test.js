import authenticate from './authenticate';


const test = () => {
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
            "error": "authenticationError",
            "authenticated": false
        },
        {
            "error": "authenticationError",
            "authenticated": false
        },
        {
            "error": "authenticationError",
            "authenticated": false
        },
        {
            "error": null,
            "authenticated": false
        }, 
        {
            "error": "unknown",
            "authenticated": false
        }
    ]

    actions.forEach((_, i) => {
        assert.deepEquals(authenticate(actions[i], results[i]))
    }); 
} 

test();
