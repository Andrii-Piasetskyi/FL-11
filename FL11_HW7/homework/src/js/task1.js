const mailMsg = 'Please, enter your email',
      passMsg = 'Please, enter your password',
      errLength =`I don't know any emails having name length less than 6 symbols.`,
      err = 'I don’t know you',
      placeholder = 'example@mail.com',
      minLength = 6,
      curr = [], 
      db = {
          mail: [
            'user@gmail.com',
            'admin@gmail.com'
          ],
          pass: [
            'UserPass',
            'AdminPass'
          ]
      };
     
let val = window.prompt(mailMsg, placeholder);

if (val === '' || val === placeholder){
    alert('Canceled');
    val = window.prompt(mailMsg, placeholder);
}else if(val.length < minLength){
    alert(errLength);
}

for(let i = 0, j = db.mail.length; i < j; i++){
    if(val === db.mail[i]){
        val = window.prompt(passMsg);
        curr.push(db.mail[i]);
        if (val === ''){
            alert('Canceled');
        } else if(val === db.pass[i]){
            alert('correct');
        } else{
            alert('Wrong password');
        }
    }
}

if(!curr.length){
    val = alert(err);
}

