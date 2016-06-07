contract Levels{

    bytes32 name;
    bytes32[]challenges;
    address creator;
    
    function Levels(bytes32[] _challenges, bytes32 _name){
        creator = msg.sender;
        challenges = _challenges;
        name = _name;
    }
    
    function checkTrust (address candidate, bytes32 level)constant returns(bytes32 role){
        var access = Factory(creator).findAccess(candidate);
        //address[] solved = Access(access).getSolvedChallenges();
        for (uint challenge = 0 ; challenge < levelstore[level].length -1; challenge++){
            var solved = Access(access).isSolvedChallenge(challenge);
            if(solved){
                throw;
            }
        }
        
        
        return level;
    }
    
    
    
    
    
}