let msg = 'Please, enter 3 point’s numeric values dividing them by semicolon (;)',
    placeholder = 'x1; y1; x2; y2; x3; y3',
    dataArr = [],
    dataLength = 6,
    val = [],
    x1 = 0, y1 = 1, x2 = 2, y2 = 3, x3 = 4, y3 = 5, dev = 2,
    data = window.prompt(msg, placeholder);

while(data === '' || data === placeholder) {
    data = window.prompt(msg, placeholder);
}

dataArr = data.replace(',', '.').replace(/;\s*$/, '').split(';');

for(let i = 0; i < dataArr.length; i++) {
    if (isNaN(dataArr[i]) || dataArr[i] < 0 || dataArr.length !== dataLength) {
        alert('The only 6 positive numeric values will be submited');
        location.reload();
        break;
    } else {
        val.push(Number([dataArr[i]]));
    }
}

if((val[x1] + val[x3]) / dev === val[x2] && (val[y1] + val[y3]) / dev === val[y2]) {
    console.log(true);
} else {
    console.log(false);
}
