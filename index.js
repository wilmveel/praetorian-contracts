var contracts = {
    party: require('./contracts/Party.sol'),
    grant: require('./contracts/Grant.sol'),
    Challenge: require('./contracts/Challenge.sol'),
    PasswordChallenge: require('./contracts/PasswordChallenge.sol'),
    access: require('./contracts/Access.sol'),
    factory: require('./contracts/Factory.sol')
};

var all = ""
Object.keys(contracts).forEach(function(key) {
    all += contracts[key]
});

module.exports = all;