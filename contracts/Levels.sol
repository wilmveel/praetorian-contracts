contract Levels{
    mapping(bytes32 => bytes32[]) levelstore;
    address creator;
    
    function Levels(bytes32[] _admin1Level, bytes32[] _admin2Level){
        creator = msg.sender;
        levelstore['admin1'] = _admin1Level;
        levelstore['admin2'] = _admin2Level;
    }
    
    function checkTrust (address candidate, bytes32 level)constant returns(bytes32 role){
        var access = Factory(creator).findAccess(candidate);
        var solved = Access(access).isSolved();
        
        
        return 'admin1';
    }
    
    
    
}