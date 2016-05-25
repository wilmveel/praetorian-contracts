var fs = require('fs')
var solc = require('solc');
require.extensions['.sol'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};
//module.exports = all;
console.log('hello')
var contracts = {
    party: require('./contracts/Party.sol'),
    grant: require('./contracts/Grant.sol'),
    Challenge: require('./contracts/Challenge.sol'),
    PasswordChallenge: require('./contracts/PasswordChallenge.sol'),
    access: require('./contracts/Access.sol'),
    factory: require('./contracts/Factory.sol')
}
console.log('whats going on');

var all = ""
Object.keys(contracts).forEach(function(key) {
    all += contracts[key]
});



var compiled = solc.compile(all,1).contracts;
var compjson = JSON.stringify(compiled)
fs.writeFile('build/contracts.json', compjson, function(err){
  console.log(err);  
})