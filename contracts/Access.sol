contract Access{
    
    address ownerDelegate;
    
    address[] solvedChallenges;
    
    function Access (){
       ownerDelegate = msg.sender; 
    }
    
    function authorize(){
        solvedChallenges.push(msg.sender);
        
    }
    
    function isSolved(address challenge) constant returns(address[] sc){
        return solvedChallenges;
    }
    
}