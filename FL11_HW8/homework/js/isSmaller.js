function isSmaller(){
    let elements = Array.from(arguments);
    const firstEl = 0,
          secondEl = 1;
    return(elements[firstEl] < elements[secondEl]);
}