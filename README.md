# string-accumulating-sink [![Build Status](https://secure.travis-ci.org/randymized/string-accumulating-sink.png?branch=master)](http://travis-ci.org/randymized/string-accumulating-sink)

> A Node.js stream that accumulates all received chunks into a string.
Pipe a source into an instance of `string_accumulating_sink`.  It will
accumulate the chunks of data it receives into a string and then
send that string to the callback.

## Getting Started
Install the module with: `npm install string-accumulating-sink`

```javascript
string_accumulating_sink([encoding],function (result){});
```

## Example
```javascript
var string_accumulating_sink = require( 'string-accumulating-sink' );
source_stream.pipe(string_accumulating_sink(function (result) {
    console.log(result);
}))
```
## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Randy McLaughlin
Licensed under the MIT license.
