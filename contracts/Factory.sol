contract Factory {

    event created(address addr);

    address[] private parties;
    
    mapping(address => address) private walletAccess;

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
    
    function getAccess(address _wallet) constant returns(address addr){
        var wallAddr = walletAccess[msg.sender];
        if(wallAddr == 0){
            wallAddr = createAccess(msg.sender);
        }
        return wallAddr;
    }
    
    function createAccess(address _wallet) returns(address addr){
        var access = new Access();
        walletAccess[_wallet] = access;
        created(access);
        return access;
    }

}