var test = require('tape')
var isEmptyObj = require('../')



var a = [];
var b = [{1:2}];
var c = { one: 1 };
var d = {};
var e = [{}];
var f = {source: {}, type: 'typeValue', pool: {}, acquireConnectionTimeout: 30000, system: [ { a: [1,2], c: [5,6] }, 2] }
var g = {timeseries: {tillDate: ['val1', 'val2', 'val3', 'val4', 'val5']}}
var h = { timeseries: { tillDate: [], } }
var i = {a: [], b:{ }};
var j = {a: [], b:{ aa:[11], bb:{}}};
var k ={ system: [ { a: [1,2], c: [5,6], }, 2]}
var l = {source: {}, type: "", pool: {}, acquireConnectionTimeout: '', system: [ { a: [], c: [] }, ] }
var m = {a:" "}
var n = {a:true}


test('isEmptyObj Testing', function(assert) {
    assert.equal(isEmptyObj(a), true);
    assert.equal(isEmptyObj(b), false);
    assert.equal(isEmptyObj(c), false);
    assert.equal(isEmptyObj(d), true);
    assert.equal(isEmptyObj(e), true);
    assert.equal(isEmptyObj(f), false);
    assert.equal(isEmptyObj(g), false);
    assert.equal(isEmptyObj(h), true);
    assert.equal(isEmptyObj(i), true);
    assert.equal(isEmptyObj(j), false);
    assert.equal(isEmptyObj(k), false);
    assert.equal(isEmptyObj(l), true);
    assert.equal(isEmptyObj(m), true);
    assert.equal(isEmptyObj(n), false);
    assert.end()
})

