contract Secure {
    address configuration;
    
    function Secure(address _configuration){
        configuration = _configuration;
    }
    modifier hasRole(bytes32 role){
        var trusted = role == Levels(configuration).checkTrust(msg.sender);
        if(!trusted) return;
    }
    
    function setConfiguration(address newConfig)hasRole("admin1"){
        configuration = newConfig;
    }
}