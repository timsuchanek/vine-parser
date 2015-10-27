vine-parser
===========

Apperently, the vine api doesn't support the lookup of one video.
So this library gives you the metadata json you need.

## API

```js
vine(id) -> returns a Promise
```
## Usage

```js
	var vine = require('vine-parser');

	vine('Ml16lZVTTxe').then(function(res) {
		console.log(res);
	}, function(err) {
		console.log('oops', err);
	})

```
