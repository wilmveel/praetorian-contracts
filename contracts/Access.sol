contract Access{
    
    address ownerDelegate;
    
    mapping(address => bool) solvedChallenges;
    
    function Access (){
       ownerDelegate = msg.sender; 
    }
    
    function authorize(address challenge){
        solvedChallenges[challenge] = true;
        
    }
    
    function isSolved(address challenge) constant returns(bool res){
        return solvedChallenges[challenge];
    }
    
}