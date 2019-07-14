function isInteger(num){
    const a = 10;
    if(num === parseInt(num, a)){
        return true;
    } else{
        return false;
    }
}

isInteger(11.5);