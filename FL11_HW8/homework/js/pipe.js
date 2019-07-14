function pipe(){
    let elements = Array.from(arguments),
        j = 0, m = 1, res = 0;
        for(let i = elements.length - m; i >= j; i--){
            res += elements[i];
        }
        return res;
}

console.log(pipe(1,5,1));
