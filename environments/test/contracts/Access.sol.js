// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[{"name":"challenge","type":"address"}],"name":"isSolved","outputs":[{"name":"","type":"bool"}],"type":"function"},{"constant":false,"inputs":[{"name":"challenge","type":"address"}],"name":"authorize","outputs":[{"name":"done","type":"bool"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "606060405260008054600160a060020a03191633179055609d8060226000396000f3606060405260e060020a600035046354a874b481146024578063b6a5d7de146058575b005b609360043573ffffffffffffffffffffffffffffffffffffffff811660009081526001602052604090205460ff165b919050565b609360043573ffffffffffffffffffffffffffffffffffffffff81166000908152600160208190526040909120805460ff1916821790556053565b6060908152602090f3",
    unlinked_binary: "606060405260008054600160a060020a03191633179055609d8060226000396000f3606060405260e060020a600035046354a874b481146024578063b6a5d7de146058575b005b609360043573ffffffffffffffffffffffffffffffffffffffff811660009081526001602052604090205460ff165b919050565b609360043573ffffffffffffffffffffffffffffffffffffffff81166000908152600160208190526040909120805460ff1916821790556053565b6060908152602090f3",
    address: "",
    generated_with: "2.0.9",
    contract_name: "Access"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Access error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("Access error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Access error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Access error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Access = Contract;
  }

})();
