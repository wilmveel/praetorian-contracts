contract Factory {

    event created(address addr);

    address[] parties;
    
    mapping(address => address) walletAccess;

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
    
    function getAccess(address _wallet) constant returns(address access){
        var wallAddr = walletAccess[_wallet];
        if(wallAddr == 0){
            wallAddr = createAccess(_wallet);
        }
        return wallAddr;
    }
    
    function createAccess(address _wallet) returns(address addr){
        var access = new Access();
        created(access);
        walletAccess[_wallet] = access;
        return access;
    }

}