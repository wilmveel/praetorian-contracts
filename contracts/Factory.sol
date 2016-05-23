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
    
    function getAccess() constant returns(address access){
        var wallet = msg.sender;
        return walletAccess[wallet];
    }
    
    function createAccess() returns(address addr){
        var wallet = msg.sender;
        var access = new Access();
        created(access);
        walletAccess[wallet] = access;
        return access;
    }

}