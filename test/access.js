contract('Access', function(accounts){
    it('should set an address as solved', function(done){
        var access = Access.load();
        access.new;
        access.authorize.call( '0x525252525252525252525').then(function(){
            
        })
    })
    
})