// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"getSalt","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":true,"inputs":[],"name":"getResponse","outputs":[{"name":"","type":"bytes20"}],"type":"function"},{"constant":true,"inputs":[],"name":"getChallenge","outputs":[{"name":"","type":"bytes32"}],"type":"function"},{"constant":false,"inputs":[{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"},{"name":"access","type":"address"}],"name":"authorize","outputs":[],"type":"function"},{"inputs":[{"name":"_response","type":"bytes20"},{"name":"_salt","type":"bytes32"}],"type":"constructor"},{"anonymous":false,"inputs":[],"name":"error","type":"event"},{"anonymous":false,"inputs":[],"name":"success","type":"event"}],
    binary: "60606040818152806101ab833960a0905251608051600280546c010000000000000000000000008404600160a060020a0319909116179055600081905560a0818152602090206001555050610153806100586000396000f3606060405260e060020a600035046313a9589c811461003c57806318a30d1614610046578063759014f014610057578063792e1ffc14610062575b005b6101496000545b90565b610149600254606060020a02610043565b610149600154610043565b61003a60043560243560443560643560025460018054606090815260ff8716608090815260a087905260c0869052600093606060020a02929160e091602091908187866161da5a03f115610002575060408051805183548252825191829003602090810183209094557fb6a5d7de00000000000000000000000000000000000000000000000000000000825273ffffffffffffffffffffffffffffffffffffffff30811660048401529251606060020a91909102909414949186169363b6a5d7de93602483810194919383900301908290876161da5a03f115610002575050505050505050565b6060908152602090f3",
    unlinked_binary: "60606040818152806101ab833960a0905251608051600280546c010000000000000000000000008404600160a060020a0319909116179055600081905560a0818152602090206001555050610153806100586000396000f3606060405260e060020a600035046313a9589c811461003c57806318a30d1614610046578063759014f014610057578063792e1ffc14610062575b005b6101496000545b90565b610149600254606060020a02610043565b610149600154610043565b61003a60043560243560443560643560025460018054606090815260ff8716608090815260a087905260c0869052600093606060020a02929160e091602091908187866161da5a03f115610002575060408051805183548252825191829003602090810183209094557fb6a5d7de00000000000000000000000000000000000000000000000000000000825273ffffffffffffffffffffffffffffffffffffffff30811660048401529251606060020a91909102909414949186169363b6a5d7de93602483810194919383900301908290876161da5a03f115610002575050505050505050565b6060908152602090f3",
    address: "",
    generated_with: "2.0.9",
    contract_name: "PasswordChallenge"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("PasswordChallenge error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("PasswordChallenge error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("PasswordChallenge error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("PasswordChallenge error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.PasswordChallenge = Contract;
  }

})();
