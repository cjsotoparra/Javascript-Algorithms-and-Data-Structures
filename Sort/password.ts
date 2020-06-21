// Written with TypeScript
function getPassword(clearTextPassword: boolean) {
    if(clearTextPassword) {
        return 'password';
    }
    return '********';
}

let password = getPassword('false');
