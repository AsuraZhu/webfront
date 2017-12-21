'use strict';

var version = "1.0.0";

function main () {
  console.log('version ' + version);
}
setTimeout(()=>{console.log(2000)},2000)
setTimeout(()=>{console.log(1000)},0)

module.exports = main;
