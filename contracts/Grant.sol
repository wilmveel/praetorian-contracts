
contract Grant is Secure{

    address client;
    address owner;
    bool private granted = false;
    string public conditions = "";
    
    /*
     * No Ether can be transferred to Grant
     */
    function(){
        return;
    }

    function Grant(address _client, address _owner, address _configuration) Secure(_configuration) {
        
        client = _client;
        owner = _owner;
    }

    /*
     * authorize the grant contract
     * this can only be done once
     */
    function grantAccess() hasRole('admin1')  {
        granted = true;
    }

    /*
     * revoke the grant contract
     * this can be done by the client or owner
     */
    function revoke() hasRole('admin1') {
        
        suicide(msg.sender);
    }
    
    function getState() constant returns(address client, address owner, string conditions, bool granted){
        return (client, owner, conditions, granted);
    }

}

