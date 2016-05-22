contract Factory {

    event created(address addr);

    address[] parties;

    function createParty()  returns (address addr){
        var party = new Party();
        parties.push(party);
        created(party);
        return party;
    }

}