
'use strict';
require('should');
var es= require('event-stream');
var request = require('request');
var crypto = require('crypto');
var fs = require('fs');
var path = require('path');
var filed = require('filed');
var string_accumulating_sink = require( '../lib/string-accumulating-sink.js' );

describe( 'string-accumulating-sink', function() {
  describe( 'string_accumulating_sink()', function() {
    it( 'should be a function', function() {
      string_accumulating_sink.should.be.a( 'function' );
    } );
    it( 'should receive a tiny amount of data without loss', function(done) {
      es.readable(function (count, callback) {
        this.emit('data','a')
        this.emit('end')
        callback()
      })
      .pipe(string_accumulating_sink(function (result) {
        result.should.equal('a');
        done()
      }))
    } );
    it( 'should receive a more substantial amount of text without loss', function(done) {
      var filename= path.normalize(path.dirname(module.filename)+'/../lib/string-accumulating-sink.js');
      var expected= fs.readFileSync(filename,'binary');
      filed(filename)
        .pipe(string_accumulating_sink(function (result) {
          result.should.equal(expected)
          done();
        }))
    } );
    it( 'should allow encoding to be specified', function(done) {
      var filename= path.normalize(path.dirname(module.filename)+'/../lib/string-accumulating-sink.js');
      var expected= fs.readFileSync(filename,'binary');
      filed(filename)
        .pipe(string_accumulating_sink('binary',function (result) {
          result.should.equal(expected)
          done();
        }))
    } );
  } );
} );
