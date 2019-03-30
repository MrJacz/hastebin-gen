const { promisified: p } = require('phin');

module.exports = async function(code, lang = '', site = 'https://hastebin.com/documents'){
    try{
        const res = await p({url: site, method: 'POST', data: code})
        const { key } = JSON.parse(res.body);
        return `${site}/${key}${lang && `.${lang}`}`
    }catch(err){
        throw err;
    }
}
// props to Nomsy for the model :p