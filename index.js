function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    return function hello (){
        console.log("");
    }
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log("");
    }
}