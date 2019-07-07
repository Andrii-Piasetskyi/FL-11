let msg = 'Please, enter 3 numbers for triangle sides length dividing them by semicolon (;)',
    placeholder = 'a; b; c',
    dataArr = [],
    dataLength = 3,
    val = [],
    none = [],
    equal = [],
    a = 0, b = 1, c = 2,
    data = window.prompt(msg, placeholder);

while (data === '' || data === placeholder) {
    data = window.prompt(msg, placeholder);
}

dataArr = data.replace(',', '.').replace(/;\s*$/, '').split(';');

for (let i = 0; i < dataArr.length; i++) {
    if (isNaN(dataArr[i]) || dataArr[i] < 0 || dataArr.length !== dataLength) {
        alert('The only 3 positive numeric values will be submited');
        location.reload();
        break;
    } else {
        val.push(Number([dataArr[i]]));
    }
}

for (let i = 0; i < val.length; i++) {
    if (val[i] === a) {
        none.push(val[i]);
    }
    for (let j = i + 1; j < val.length; j++) {
        if (val[i] === val[j]) {
            equal.push(val[i]);
        }
    }
}

if(none.length) {
    console.log('Triangle doesn’t exist');
} else if(equal.length > c) {
    console.log('Eequivalent triangle');
} else if(equal.length){
    console.log('Isosceles triangle');
} else{
    console.log('Normal triangle');
}
