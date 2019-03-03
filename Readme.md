## On Leave Content

![User moving to close the page and it shows an alert modal](https://raw.githubusercontent.com/willianjusten/on-leave-intent/master/example/on-leave-intent.gif)

> A script to detect if the user is leaving the page after some time and calls a function.

I know most of us don't like those modals that appears when we are leaving the page, but sometimes we need it. And this library is not only for that, you can call any function when the user leaves the page, so use your imagination.

## Installing

Install the library via `npm install on-leave-intent` or `yarn add on-leave-intent`. Or you can even download the [file here](https://github.com/willianjusten/on-leave-intent/blob/master/lib/on-leave-intent.min.js) and load with the good and old way `<script src="on-leave-intent.min.js"></script>`.

## How to use

If you used npm/yarn, just import the file:

```js
import OnLeaveIntent from 'on-leave-intent';
```

And now you can use it like:

```js
function callback() {
  console.log('A function to be called when user leaves the page');
}

const delay = 1000; // time in milliseconds defined to start tracking the user

const onLeaveIntent = new OnLeaveIntent(callback, delay);
```

## Testing

You can see the tests on [index.test.js](https://github.com/willianjusten/on-leave-intent/blob/master/src/index.test.js), use `yarn test` to run the tests. If you want to see an example working on the Browser, just run `yarn start`.
