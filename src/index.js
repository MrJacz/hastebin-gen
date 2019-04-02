const fetch = require("node-fetch");

module.exports = async (input, options = { url: "https://hastebin.com", extension: "js" }) => {
    if (!input) throw new Error("Input is a required argument");

    if (typeof options === "string") options = { url: "https://hastebin.com", options };

    const { url, extension } = options;

    const res = await fetch(`${url}/documents`, {
        method: "post",
        body: input,
        headers: { "Content-Type": "text/plain" }
    });

    if (!res.ok) throw new Error(res.statusText);

    const { key } = await res.json();

    return `${url}/${key}.${extension}`;
};
