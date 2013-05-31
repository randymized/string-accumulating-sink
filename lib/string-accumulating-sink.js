
/*
 * string-accumulating-sink
 * https://github.com/randymized/string-accumulating-sink
 *
 * Copyright (c) 2013 Randy McLaughlin
 * Licensed under the MIT license.
 */

'use strict';

var Stream = require('stream');

module.exports = function string_accumulating_sink(encoding,cb) {
  var s = new Stream;
  var result= ''
  s.writable = true;

  if (arguments.length == 1)
    cb= encoding;

  s.write = function (buf) {
    result+= buf.toString()
    return true
  };

  s.end = function (buf) {
    if (arguments.length) s.write(buf);
    s.writable = false;
    cb(result)
  };

  s.destroy = function () {
      s.writable = false;
  };
  return s;
}