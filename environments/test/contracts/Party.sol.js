// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"getChallenges","outputs":[{"name":"","type":"address[]"}],"type":"function"},{"constant":false,"inputs":[{"name":"challenge","type":"address"}],"name":"addChallenge","outputs":[],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "606060405260de8060106000396000f3606060405260e060020a600035046346c7c12681146024578063f8242c32146090575b005b609460006060818152815460a060208202810160405260808281529293919082828015608657602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff16815260019190910190602001808311605b575b5050505050905090565b6022565b60405180806020018281038252838181518152602001915080519060200190602002808383829060006004602084601f0104600f02600301f1509050019250505060405180910390f3",
    unlinked_binary: "606060405260de8060106000396000f3606060405260e060020a600035046346c7c12681146024578063f8242c32146090575b005b609460006060818152815460a060208202810160405260808281529293919082828015608657602002820191906000526020600020905b815473ffffffffffffffffffffffffffffffffffffffff16815260019190910190602001808311605b575b5050505050905090565b6022565b60405180806020018281038252838181518152602001915080519060200190602002808383829060006004602084601f0104600f02600301f1509050019250505060405180910390f3",
    address: "0xc47816c1304825b729304dcca2a016eab4027077",
    generated_with: "2.0.9",
    contract_name: "Party"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Party error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("Party error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Party error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Party error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Party = Contract;
  }

})();
