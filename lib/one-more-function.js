'use strict';

var extractFunctionsFromArguments = require('./extract-functions-from-arguments');

module.exports = oneMoreFunction;

/**
 * Tacks one more function onto the end of an existing function.
 *
 * Useful for adding another listener to for example <code>window.onresize</code>.
 *
 * Given:
 *   <pre>
 *   window.onresize = function () {
 *     console.log('onresize 1');
 *   };
 *   </pre>
 *
 * You can add another one:
 *   <pre>
 *   window.onresize = oneMoreFunction(window.onresize, function () {
 *     console.log('onresize 2');
 *   });
 *   </pre>
 *
 * When you resize the browser window,
 *
 * Then you get:
 *   <pre>
 *   onresize 1
 *   onresize 2
 *   </pre>
 *
 * @param firstFunction The function you want to be called first, for example <code>window.onresize</code>. May be
 * <code>undefined</code>.
 * @param secondFunction The next function you want to be called after <code>firstFunction</code>. May be
 * <code>undefined</code>.
 * @param anyNumberOfFunctions Any number of functions is allowed.
 * @param orEvenArraysOfFunctions Even arrays of functions are permitted. Any non-Array, non-function arguments will be
 * ignored.
 * @returns {Function|undefined} A function which calls each of the supplied functions, in order. Or
 * <code>undefined</code> if no function (or only <code>undefined</code> functions) were supplied.
 */
function oneMoreFunction(firstFunction, secondFunction, anyNumberOfFunctions, orEvenArraysOfFunctions) {
    var functions = extractFunctionsFromArguments(arguments);
    var numberOfFunctions = functions.length;
    if (numberOfFunctions === 0) {
        return undefined;
    } else if (numberOfFunctions === 1) {
        return functions[0];
    } else {
        return function () {
            for (var i = 0; i < numberOfFunctions; i++) {
                functions[i].apply(this, arguments);
            }
        }
    }
}

