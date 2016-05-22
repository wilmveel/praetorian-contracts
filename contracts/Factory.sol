contract Factory {

    event created(address addr);

    address[] parties;

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

}