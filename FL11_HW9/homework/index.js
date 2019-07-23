//0
function getNumbers(str){
    let arr = str.split('');
    let nums = [];
    for(let i = 0, j = arr.length; i < j; i++){
        if(!isNaN(arr[i])){
            nums.push(arr[i]);
        }
    }
    return nums;
}

//1
function findTipes () {
    const add = 1;
    let arr = Array.from(arguments);
    let result = {};
    for (let i = 0, j = arr.length; i < j; i++) {
        let val = typeof arr[i];
        let valStr = String(val);        
        if(result.hasOwnProperty(valStr)) {            
            result[valStr] = result[valStr] + add;
        } else {            
            Object.defineProperty(result, valStr, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: add
            });
        }
    }
    return result;        
}

//2
function executeforEach(arr, action) {
    for (let i = 0, j = arr.length; i < j; i++) {
        action(arr[i]);
    }    
}

function action(arg) {
    let res = console.log(arg);
    return res;
}

//3
function mapArray (elements, callback) {
    let result = [];    
    executeforEach(elements, (i) => result.push(callback(i)) );      
    return result;
}

function adding (el) {
    const three = 3;
    return el + three;
}

//4
function filterArray (elements, callback) {
    let result = [];    
    executeforEach(elements, function(i) {
        if (callback(i)) {
            result.push(i);
        } 
    })  
    return result;
}

function checking(arg) {
    const check = 3;
    if(arg > check){
        return arg;
    }
}

//5
function showFormattedDate(arg) {
    let result = '',
        dObj = new Date(Date.parse(arg)),
            params = {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        };
    result = `Date: ${dObj.toLocaleDateString('en-GB', params)}`;
    return result;    
}

//6
function canConvertToDate(arg) {
    let result = new Date(Date.parse(arg));
    if (Date.parse(arg)) {
        return true;
    } else {
        console.log(`errored with ${result}`)
        return false;
    }
}

//7
function daysBetween (date1, date2) {
    const days = 24,
          hours = 60,
          minutes = 60,
          seconds = 1000;
    let start, finish, differ, result;

    start = new Date(date1).getTime();
    finish = new Date(date2).getTime();    
    differ = Math.abs(start - finish);
    result = Math.round(differ / (seconds * minutes * hours * days));
    return result;
}

//8
function getAmountOfAdultPeople(param) {
    let currDate = new Date().toISOString(),   
        count = 0;
    const olderThen = 6570,
          add = 1;
      filterArray(param, function(count) {
        if (daysBetween(new Date(count.birthday), new Date(currDate)) > olderThen) {
            count = count + add;
        }
    });    
    return count;    
}

let data = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    'birthday': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    'birthday': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    'birthday': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    'birthday': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
];