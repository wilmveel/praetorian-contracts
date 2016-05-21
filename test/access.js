contract('Access', function(accounts){
    
    it('should set an address as solved', function(done){
    var access = Access.deployed();        
        
        access.authorize( accounts[0], {
            from:accounts[0],
            gas:2000000
        }).then(function(result){
            }).then(done).catch(done)
        });
    
    
    it('should return that the address is solved', function(done){
        var access = Access.deployed();        
        access.isSolved(accounts[0], {
            from:accounts[0],
            gas:2000000
        }).then(function(result){
            
            assert( result === true);
            
        }).then(done).catch(done);
    })
})