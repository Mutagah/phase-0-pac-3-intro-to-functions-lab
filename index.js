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
    const stringMessage = string;
    console.log(stringMessage.toUpperCase());
}
function logWhisper(string)
{
    const stringWhisper = string;
    console.log(stringWhisper.toLowerCase());
}
function sayHiToHeadphonedRoommate(string)
{
    const stringHeadphonedRoomate = string ;
    const dinnerMessage = "Let's have dinner together!";
    if (stringHeadphonedRoomate === stringHeadphonedRoomate.toLowerCase())
    {
        return "I can't hear you!";
    }else if(stringHeadphonedRoomate === stringHeadphonedRoomate.toUpperCase())
    {
        return "YES INDEED!";
    }else if(stringHeadphonedRoomate === dinnerMessage )
    {
        return "I would love to!";
    }

}
