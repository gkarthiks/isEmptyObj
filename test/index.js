var test = require('tape')
console.log('require(\'tape\')')
var isEmpty = require('../index')


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

test('isEmptyObj Testing', (assert) => {
    assert.equal(isEmpty(a), true)
    assert.equal(isEmpty(b), false)
    assert.equal(isEmpty(c), false)
    assert.equal(isEmpty(d), true)
    assert.equal(isEmpty(e), true)
    assert.equal(isEmpty(f), false)
    assert.equal(isEmpty(g), false)
    assert.equal(isEmpty(h), true)
    assert.equal(isEmpty(i), true)
    assert.equal(isEmpty(j), false)
    assert.equal(isEmpty(k), false)
    assert.equal(isEmpty(l), true)
    assert.end()
})
