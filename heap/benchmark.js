'use strict';

var Benchmark = require('benchmark');
var Sort = require('../sort/sort.js');
var Heap = require('./heap.js');

var suite = new Benchmark.Suite;

var dataset = [1, -10, 2, 3, -2, 9, 8, 4, 3, 19, 22, 89, 1, 1, 23, 22, 21, 5, 6, 7, 8, 100];

console.info(dataset);
console.info(Heap.sort(dataset));
console.info(Sort.insertion(dataset));
console.info(Sort.merge(dataset));

suite
  .add('Heap#sort', function() {
    Heap.sort(dataset);
  })
  .add('Sort#insertion', function() {
    Sort.insertion(dataset);
  })
  .add('Sort#merge', function() {
    Sort.merge(dataset);
  })
  .on('cycle', function(event) {
    console.log(String(event.target) + ' ' + event.target.stats.mean);
  })
  .run({ 'async': true });