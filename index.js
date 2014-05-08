'use strict';

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
 * @param nextFunction The next function you want to be called after <code>firstFunction</code>. May be
 * <code>undefined</code>.
 * @returns {Function} A function which you can assign to the variable/property you sent in as
 * <code>firstFunction</code>. When called, it will call <code>firstFunction</code> and then <code>nextFunction</code>.
 */
function oneMoreFunction(firstFunction, nextFunction) {
    if (typeof firstFunction === 'undefined') {
        return nextFunction;
    } else if (typeof nextFunction === 'undefined') {
        return firstFunction;
    } else {
        return function () {
            firstFunction.apply(this, arguments);
            nextFunction.apply(this, arguments);
        };
    }
}

