# one-more-function

Tacks one more function onto the end of an existing function.

Useful for adding another listener to for example `window.onresize`.

## Example

Given:

        window.onresize = function () {
            console.log('onresize 1');
        };

You can add another one:

        window.onresize = oneMoreFunction(window.onresize, function () {
            console.log('onresize 2');
        });

When you resize the browser window,

Then you get:

        onresize 1
        onresize 2

## License

MIT