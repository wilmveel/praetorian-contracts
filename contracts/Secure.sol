contract Secure {
    address configuration;
    
    function Secure(address _configuration){
        configuration = _configuration;
    }
    modifier hasRole(bytes32 level){
        var trusted = Levels(configuration).checkTrust(msg.sender, level);
        if(!trusted) return;
    }
    
    function setConfiguration(address newConfig)hasRole("admin1"){
        configuration = newConfig;
    }
}