contract TrustedParty{
    modifier isTrusted(){
        var delegate = msg.sender;
        var trusted = true;//Configuration(0x0000000000000000000001).checkTrust(msg.sender, id);
        if(!trusted){
            return;
        }
    }
}