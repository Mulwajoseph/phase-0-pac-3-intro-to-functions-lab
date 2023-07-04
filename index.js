 function shout(string)
 {
    return string.toUpperCase();
 }

 function whisper(string)
 {
    return string.toLowerCase();
 }

 function logShout(string)
 {
    // return string.toUpperCase();
    var uppercaseString = string.toUpperCase();
    console.log(uppercaseString);
 }

 function logWhisper(string)
 {
    var lowercaseString = string.toLowerCase();
    console.log(lowercaseString);
 }

 function sayHiToHeadphonedRoommate(string){
    if (string.toLowerCase() ===string){
        return "I can't hear you!"
    }else if ( string.toUpperCase()=== string){
            return "YES INDEED!"
    }else if (string === "Let's have dinner together!"){
        return "I would love to!";
    }else {
        //returns other instances not returned
        return "Hello"
    }
 }


 // Example usage
console.log(sayHiToHeadphonedRoommate('hello')); // Outputs: "I can't hear you!"
console.log(sayHiToHeadphonedRoommate('HELLO')); // Outputs: "YES INDEED!"
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!")); // Outputs: "I would love to!"
console.log(sayHiToHeadphonedRoommate('Hi')); // Outputs: "Hello!"
