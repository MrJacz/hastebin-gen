const snekfetch = require("snekfetch");

module.exports = (function (input, extension) {
    return new Promise(function (res, rej) {
        if (!input) rej("Input argument is required.");
        snekfetch.post("https://hastebin.com/documents").send(input).then(body => {
            res("https://hastebin.com/" + body.body.key + ((extension) ? "." + extension : ""));
        }).catch(e => rej(e));
    })
});
// Thanks to gus for making Snekfetch a thing kthxs and PassTheMayo for recreating this ^
