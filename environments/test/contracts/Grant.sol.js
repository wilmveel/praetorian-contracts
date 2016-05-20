// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"getState","outputs":[{"name":"client","type":"address"},{"name":"owner","type":"address"},{"name":"conditions","type":"string"}],"type":"function"},{"constant":false,"inputs":[],"name":"authorize","outputs":[],"type":"function"},{"constant":false,"inputs":[],"name":"revoke","outputs":[],"type":"function"},{"inputs":[{"name":"_client","type":"address"}],"type":"constructor"}],
    binary: "606060405260405160208061012d83395060806040525160008054600160a060020a031916821790555060f7806100366000396000f36060604052361560315760e060020a60003504631865c57d81146033578063ababa4a7146077578063b6549f75146093575b005b6080604052600060608181528190608082815260a083905260c082815260e08490526101008285808381848160046003f15090505094505050505060405180910390f35b6031600154600160a060020a03908116339091161460ca576002565b603160005433600160a060020a03908116911614158060c25750600154600160a060020a039081163390911614155b1560eb576002565b6001805473ffffffffffffffffffffffffffffffffffffffff191633179055565b33600160a060020a0316ff",
    unlinked_binary: "606060405260405160208061012d83395060806040525160008054600160a060020a031916821790555060f7806100366000396000f36060604052361560315760e060020a60003504631865c57d81146033578063ababa4a7146077578063b6549f75146093575b005b6080604052600060608181528190608082815260a083905260c082815260e08490526101008285808381848160046003f15090505094505050505060405180910390f35b6031600154600160a060020a03908116339091161460ca576002565b603160005433600160a060020a03908116911614158060c25750600154600160a060020a039081163390911614155b1560eb576002565b6001805473ffffffffffffffffffffffffffffffffffffffff191633179055565b33600160a060020a0316ff",
    address: "",
    generated_with: "2.0.9",
    contract_name: "Grant"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("Grant error: Please call load() first before creating new instance of this contract.");
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
      throw new Error("Grant error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("Grant error: Please call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("Grant error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.Grant = Contract;
  }

})();
