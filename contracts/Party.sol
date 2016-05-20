import "TrustedParty.sol";

contract Party is TrustedParty {
    

    
    function Party(){}
    
    address[] challenges;
    
    function getChallenges() constant returns(address[]){
        return challenges;
    }
    
    function addChallenge(address challenge) isTrusted(){
        challenges.push(challenge);
    }

}
