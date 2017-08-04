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
