function formatTime(time){
    const oneDay = 1440,
          oneHour = 60,
          a = 0;
    let days = Math.floor(time / oneDay);
    if (days > a){
        time = time - oneDay * days;
    }
    let hours = Math.floor(time / oneHour);
    if (hours > a){
        time = time - oneHour * hours;
    }
    let minutes = Math.floor(time - oneDay * days - oneHour * hours);
    if (minutes < a){
        minutes = a;
    }
    return `${days} day(s) ${hours} hours(s) ${minutes} minute(s)`;
    
}

formatTime(3000);