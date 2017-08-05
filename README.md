[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/hastebin-gen)
[![npm](https://img.shields.io/npm/dt/hastebin-gen.svg?maxAge=3600)](https://www.npmjs.com/package/hastebin-gen)
[![David](https://david-dm.org/MrJacz/hastebin-gen.svg)](https://david-dm.org/Mrjacz/hastebin-gen)

[![NPM](https://nodei.co/npm/hastebin-gen.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/hastebin-gen/)


# hastebin-gen
A npm module for generating hastebin links. 
https://www.npmjs.com/package/hastebin-gen

## Installation
```npm i -S hastebin-gen```

## Example
```
const hastebin = require('hastebin-gen');
hastebin("code", "js").then(r => {
    console.log(r); //https://hastebin.com/someurl.js
}).catch(console.error);
```

## Devs
Jacz 
