contract PasswordChallenge is Challenge{

    bytes32 private salt;
    bytes32 private challenge;
    bytes20 private response;

    function PasswordChallenge(bytes20 _response, bytes32 _salt){
        response = _response;
        salt = _salt;
        challenge = sha3(_salt);
    }

    function getSalt() constant returns(bytes32){
        return salt;
    }

    function getChallenge() constant returns(bytes32){
        return challenge;
    }

    function verify(uint8 v, bytes32 r, bytes32 s) {
        var result =  (bytes20(ecrecover(challenge, v, r, s)) == response);
        challenge = sha3(challenge);
        if(result) return success();
        else return error();
    }

    function change(uint8 v, bytes32 r, bytes32 s, bytes20 _response) {
        var result = (bytes20(ecrecover(challenge, v, r, s)) == response);
        challenge = sha3(challenge);
        if(result) {
            response = _response;
            return success();
        }
        else return error();
    }

    function authorize(uint8 v, bytes32 r, bytes32 s, address access)  {
        var result =  (bytes20(ecrecover(challenge, v, r, s)) == response);
        challenge = sha3(challenge);
        if(result) {
            //Access(access).authorize();
            return success();
        }
        else return error();
    }
}



