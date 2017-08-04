const snek = require("snekfetch");
module.exports = async function (code, language = "") {
    let res = await snek.post("https://hastebin.com/documents").send(code).catch(console.error);
    const url = `https://hastebin.com/${res.body.key}${language ? `.${language}` : ``}`;
    return url;
}
// Thanks to gus for making Snekfetch a thing kthxs
