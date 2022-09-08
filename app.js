// npm - global command, comes with node
// npm -- version

// local dependency - use it only int his particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac) 

// package.json - manifest File( stores important info about our project )
// manual approach ( create package.json in the ShadowRoot, create properties etc )
// npm init ( step by step, press enter to skip )
// npm init -y ( everthing default )

// npm i lodash ( dependencies packages )
// npm i bootstrap


const _ = require('lodash');

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items);
console.log(newItems)