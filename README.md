[![Discord](https://discordapp.com/api/guilds/323779330033319941/embed.png)](https://discord.gg/J8AqH4A)
[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/hastebin-gen)
[![npm downloads](https://img.shields.io/npm/dt/hastebin-gen.svg?maxAge=3600)](https://www.npmjs.com/package/hastebin-gen)
[![NPM version](https://badge.fury.io/js/hastebin-gen.svg)](http://badge.fury.io/js/hastebin-gen)
[![Build Status](https://travis-ci.org/MrJacz/hastebin-gen.svg?branch=master)](https://travis-ci.org/MrJacz/hastebin-gen)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![dependencies Status](https://david-dm.org/mrjacz/hastebin-gen/status.svg)](https://david-dm.org/mrjacz/hastebin-gen)
[![devDependencies Status](https://david-dm.org/mrjacz/hastebin-gen/dev-status.svg)](https://david-dm.org/mrjacz/hastebin-gen?type=dev)
[![NPM](https://nodei.co/npm/hastebin-gen.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/hastebin-gen/)


# hastebin-gen
A npm module for generating hastebin links. 
https://www.npmjs.com/package/hastebin-gen

## Installation

**NPM:** ```npm i hastebin-gen```

**Yarn:** ```yarn add hastebin-gen```

## Example with Native Site (hastebin.com)
```js
const hastebin = require("hastebin-gen");

hastebin("code").then(r => {
    console.log(r); // https://hastebin.com/someurl.js
}).catch(console.error);
```

## Example with a [haste-server](https://github.com/seejohnrun/haste-server) site
```js
const hastebin = require('hastebin');

hastebin("code", { url: "https://paste.example.com" }).then(r => {
    console.log(r); // https://paste.example.com/someurl.js
}).catch(console.error);
```

## Devs
[Jacz](https://github.com/MrJacz)
