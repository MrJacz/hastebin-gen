[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/hastebin-gen)
[![npm](https://img.shields.io/npm/dt/hastebin-gen.svg?maxAge=3600)](https://www.npmjs.com/package/hastebin-gen)
[![David](https://david-dm.org/MrJacz/hastebin-gen.svg)](https://david-dm.org/Mrjacz/hastebin-gen)

[![NPM](https://nodei.co/npm/hastebin-gen.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/hastebin-gen/)


# hastebin-gen
A npm module for generating hastebin links. 
https://www.npmjs.com/package/hastebin-gen

## Installation
```npm i -S hastebin-gen```

## Examples
Using `hastebin-gen` with the native site:
```js
const hastebin = require('hastebin-gen');
hastebin("code", "js").then(r => {
    console.log(r); //https://hastebin.com/someurl.js
}).catch(console.error);
```

Using `hastebin-gen` with another [haste-server](https://github.com/seejohnrun/haste-server) site:
```js
const hastebin = require('hastebin-gen');
hastebin("code", "js", "https://paste.discord.land/documents")
.then(r => {
        console.log(r) //https://paste.discord.land/someurl.js
    }
).catch(console.error);

```


## Devs
[MrJacz](https://github.com/MrJacz) & [Fyko](https://github.com/Fyk0)
