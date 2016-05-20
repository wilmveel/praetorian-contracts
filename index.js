var contracts = {
    trustedparty: require('./contracts/TrustedParty.sol'),
    party: require('./contracts/Party.sol'),
    grant: require('./contracts/Grant.sol'),
    delegate: require('./contracts/Challenge.sol'),
    passwordDelegate: require('./contracts/PasswordChallenge.sol'),
    access: require('./contracts/Access.sol')
};

var all = ""
Object.keys(contracts).forEach(function(key) {
    all += contracts[key]
});

module.exports = all;