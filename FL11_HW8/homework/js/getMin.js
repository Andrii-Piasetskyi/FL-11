function getMin(){
    let elements = Array.from(arguments),
        min = +Infinity;
        for(let i = 0, j = elements.length; i<j; i++){
            if (elements[i] < min){
                min = elements[i];
            }
        }
        return(min);
}

getMin(1,2,3);