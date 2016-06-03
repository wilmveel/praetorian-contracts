contract Factory{

    event created(address addr);
    event found(address addr);

    address[] private parties;
    
    address[] private grants;
    
    mapping(address => address) private walletAccess;
    
    address private configuration;
    
    address creator;
    
    function Factory(bytes32[] _admin1Level, bytes32[] _admin2Level){
        creator = msg.sender;
        configuration = new Levels(_admin1Level, _admin2Level);
        
    }

    function getParties() constant returns (address[]){
        return parties;
    }

    function createParty() returns (address addr){
        var party = new Party();
        parties.push(party);
        created(party);
        return party;
    }

    function createPasswordChallenge(bytes20 response, bytes32 salt) returns (address addr){
        var challenge = new PasswordChallenge(response, salt);
        created(challenge);
        return challenge;
    }
    
    function findAccess(address wallet) returns(address addr){
        var access = walletAccess[wallet];
        if(access == 0){
            access = new Access();
            walletAccess[wallet] = address(access);
            created(address(access));
        }
        found(address(access));
        return access;
    }
    
    function createGrant(address client, address owner) returns(address addr){
        var grant = new Grant(client, owner, configuration);
        grants.push(grant);
        created(address(grant));
        return grant;
    }
    
    function createLevels(bytes32[] _admin1Level, bytes32[] _admin2Level){
        if(creator != msg.sender) throw;
        configuration = new Levels(_admin1Level, _admin2Level);
        
        created(address(configuration));
    }
}