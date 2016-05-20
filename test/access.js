contract('Access', function(accounts){
    
    it('should set an address as solved', function(done){
    var access = Access.deployed();        
        //var addressAccess = access.new();
        //access.deployed();
        access.authorize( accounts[0], {
            from:accounts[0],
            gas:2000000
        }).then(function(result){
            access.isSolved(accounts[0], {
            from:accounts[0],
            gas:2000000
        }).then(function(results){
                console.log(results)}).then(done).catch(done)});
    });
    
    it('should return solved', function(done){
        var access = Access.deployed();        
        access.isSolved(accounts[0], {
            from:accounts[0],
            gas:2000000
        }).then(function(result){
            console.log(result);
            //assert( result === true);
            
        }).then(done);
    })
})