var phrases;
exports.connect = function () {
    phrases = require("./lang")
}

exports.getPhrase = function (name) {
    if(!phrases[name]){
        throw new Error("this phrase not found" + name);
    }
    return phrases[name];
}
