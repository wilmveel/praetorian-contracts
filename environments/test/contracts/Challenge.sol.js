// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":false,"inputs":[{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"},{"name":"access","type":"address"}],"name":"authorize","outputs":[],"type":"function"},{"anonymous":false,"inputs":[],"name":"error","type":"event"},{"anonymous":false,"inputs":[],"name":"success","type":"event"}],
    binary: "6060604052601e8060106000396000f3606060405260e060020a6000350463792e1ffc8114601a575b005b601856",
    unlinked_binary: "6060604052601e8060106000396000f3606060405260e060020a6000350463792e1ffc8114601a575b005b601856",
    address: "0xb52a3548a095261fc47c99ef0b3f5f10c58e5f76",
    generated_with: "2.0.9",
    contract_name: "Challenge"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Challenge error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("Challenge error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Challenge error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Challenge error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Challenge = Contract;
  }

})();
