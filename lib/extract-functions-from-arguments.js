'use strict';

module.exports = extractFunctionsFromArguments;

function extractFunctionsFromArguments(functionsOrArraysOfFunctions) {
    var functions = [];

    var numberOfArguments = functionsOrArraysOfFunctions.length;
    for (var i = 0; i < numberOfArguments; i++) {
        var argument = functionsOrArraysOfFunctions[i];
        if (argument instanceof Array) {
            Array.prototype.push.apply(functions, argument);
        } else if (typeof argument === 'function') {
            functions.push(argument);
        }
    }

    return functions;
}
