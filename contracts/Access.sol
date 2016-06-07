contract Access{
    
    address creator;
    
    mapping (address => bool)solvedChallenges;
    
    event success();
    event error();
    
    function Access (){
       creator = msg.sender; 
    }
    
    function authorize(){
        Factory(creator).
        solvedChallenges[msg.sender] = true;
        return success();
    }
    
    function isSolvedChallenge(address challenge) constant returns(bool){
        return solvedChallenges[challenge];
    }
    
}