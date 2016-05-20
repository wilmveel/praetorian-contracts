contract Access{
    
    address ownerDelegate;
    
    mapping(address => bool) solvedChallenges;
    
    function Access (){
       ownerDelegate = msg.sender; 
    }
    
    function authorize(address challenge)returns(bool done){
        solvedChallenges[challenge] = true;
        return true;
    }
    
    function isSolved(address challenge) constant returns(bool){
        return solvedChallenges[challenge];
    }
    
}